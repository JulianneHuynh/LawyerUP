class MessagesController < ApplicationController


  def index 
    message = Message.all 
    render json: message, status: :ok 
  end

  def show
    message = Message.find(params[:id] )
    render json: message, status: :ok 
  end

  def create 
    message = Message.create!(message_params)
    render json: message, status: 201
  end


  private 

  def message_params
    params.permit(:body, :recipient, :sender, :is_new?)
  end


















  
end
