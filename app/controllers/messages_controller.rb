class MessagesController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :message_not_found 
rescue_from ActiveRecord::RecordInvalid, with: :message_invalid 

  def index 
    message = Message.all 
    render json: Message.all, status: :ok 
  end

  def show
    message = Message.find( params[:id] )
    render json: message, serializer: MessageUsersSerializer, status: :ok 
  end

  def create 
    message = Message.create!( message_params )
    render json: message, status: 201
  end


  private 

  def message_params
    params.require( :message ).permit( :body, :recipient, :sender, :timestamp, :is_new, :user_id, :lawyer_id)
  end

  def message_invalid invalid_message
    render json: { errors: invalid_message.record.errors.full_messages }, status: 422
  end

  def message_not_found
    render json: { errors: ['Message not found']}, status: 404
  end

















  
end
