class MessagesController < ApplicationController

  def create 
    message = Message.create!(message_params)
    render json: message, status: :created
  end

  def all_messages
    user = User.find(params[:id])
    messages = user.all_messages
    render json: messages, status: :ok
  end

  def most_recent_message
    user = User.find(params[:id])
    message = user.most_recent_message
    render json: message, status: :ok
  end

  private 

  def message_params
    params.permit(:body, :recipient, :sender, :is_new?)
  end

end
