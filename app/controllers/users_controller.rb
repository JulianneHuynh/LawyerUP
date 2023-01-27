class UsersController < ApplicationController
  skip_before_action :authorized_user, only:[:create]
  
  def index 
    user = User.all 
    render json: user, status: :ok 
  end

  def show
    # user = User.find(session[:user_id])
    # user = User.find( params[:id] )
    # current_user checks to see if user is in session
    render json: current_user, status: :ok 
  end

  def create 
    user = User.create!(user_params)
    session[:user_id] = user.id
    # id gets saved in session
    render json: user, status: :created

  end

  def update 
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :accepted
  end

  def lawyer
    user = User.find( params[:id] )
    if user.is_lawyer?
      render json: user, status: :ok 
    else
      render json: { errors: ['User is not a lawyer']}, status: :method_not_allowed
    end
  end

  def lawyers
    lawyers = User.where(:is_lawyer? => true)
    render json: lawyers, status: :ok
  end
  
  # def signin 
  #   user = User.find_by(email: params[:email])
  #   if user && user.authenticate(params[:password])
  #     render json: user, states: :ok
  #   else 
  #     render json: { errors: 'Invalid Email or Password' }, status: 401
  #   end
  # end

  private 

  def user_params
    params.permit( :name, :email, :date_of_birth, :address, :profile_picture, :is_lawyer, :specialty, :law_firm, :years_in_practice, :alma_mater, :location, :board_certification, :password )
  end

end