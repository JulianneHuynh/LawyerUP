class UsersController < ApplicationController

  def index 
    user = User.all 
    render json: user, status: :ok 
  end

  def show
    user = User.find( params[:id] )
    render json: user, status: :ok 
  end

  def create 
    user = User.create!(user_params)
    
    session[:user_id] = user.id
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
  
  def signin 
    user = User.find_by(email:params[:email])
    if user && user.authenticate(params[:password])
      render json: user, states: :ok
    else 
      render json: {errors: 'Invalid Email or Password'}, status: 401
  end

  private 
  def user_params
    params.permit( :name, :email, :date_of_birth, :address, :city_state, :profile_picture, :is_lawyer, :specialty, :law_firm, :years_in_practice, :alma_mater, :board_certification, :password)
  end
  end
end