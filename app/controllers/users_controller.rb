class UsersController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :user_not_found 
rescue_from ActiveRecord::RecordInvalid, with: :user_invalid 

  def index 
    user = User.all 
    render json: User.all, status: :ok 
  end

  def show
    user = User.find( params[:id] )
    render json: user, serializer: UserAppointmentsSerializer, status: :ok 
  end

  def create 
    user = User.create!( user_params)
    render json: user, status: 201
  end

  def update 
    user = User.find( params[:id] )
    user.update!(user_params)
    render json: user, status: :accepted
  end

  def destroy 
    user = User.find( params[:id] )
    user.destroy 
    head :no_content
  end


  def lawyer
    user = User.find( params[:id] )
    if user.is_lawyer 
      render json: user, status: :ok 
    else
      render json: { errors: ['Is not a lawyer']}, status: 404
    end
  end

  private 

  def user_params
    params.require( :user ).permit( :name, :email, :date_of_birth, :address, :city_state, :profile_picture, :is_lawyer, :specialty, :law_firm, :years_in_practice, :alma_mater, :board_certification, :password_digest )
  end

  def user_invalid invalid_user
    render json: { errors: invalid_user.record.errors.full_messages }, status: 422
  end

  def user_not_found
    render json: { errors: ['User not found']}, status: 404
  end














end
