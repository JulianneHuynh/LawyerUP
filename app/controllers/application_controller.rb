class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # TO DO: make sure users cant delete/update things that arent theres 

  # before_action
  # checks to see if user is signed in to protect the authorization of routes
  # able to add more restrictions ex:admin
  # runs a method of choice before every single action available
  before_action :authorized_user

  # current_user and authorized_user 
  def current_user
    user = User.find_by(id: session[:user_id])
    user
  end 

  def authorized_user
      render json: {error:"Not Authorized"}, status: :unauthorized unless current_user
  end 
# authorized_user: checks to see if user is in session before rendering actions 
# unless the user is authorized itll return an error
# instead of if session[user_id]/else, unless is used, unless the current user is signed in 
  private

  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

  def render_not_found(error)
    # configures the response to work with the error handling we have on the frontend
      render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end 
  
end
