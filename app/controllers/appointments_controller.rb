class AppointmentsController < ApplicationController

  def index 
    appointment = Appointment.all 
    render json: appointment, status: :ok 
  end

  def show
    appointment = Appointment.find(params[:id])
    render json: appointment, status: :ok 
  end

  def create 
    appointment = Appointment.create!(appointment_params)
    render json: appointment, status: 201
  end

  def update 
    appointment = Appointment.find(params[:id])
    appointment.update!(appointment_params)
    render json: appointment, status: :accepted
  end

  def destroy 
    appointment = Appointment.find( params[:id] )
    appointment.destroy 
    head :no_content
  end

  def client
    appointment = Appointment.find( params[:id] )
    if appointment.client 
      render json: appointment, status: :ok 
    else
      render json: { errors: ['client message not found']}, status: 404
    end
  end

  def lawyer
    appointment = Appointment.find( params[:id] )
    if appointment.lawyer 
      render json: appointment, status: :ok 
    else
      render json: { errors: ['lawyer message not found']}, status: 404
    end
  end

  private 

  def appointment_params
    params.permit(:date, :time, :description, :client_id, :lawyer_id)
  end
end
