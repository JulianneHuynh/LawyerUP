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
    client = User.find(params[:id])
    if (client.is_lawyer? == false)
      render json: client.my_appointments, status: :ok 
    else
      render json: { errors: ['User is not a client'] }, status: :method_not_allowed
    end
  end

  def lawyer
    lawyer = User.find( params[:id] )
    if (lawyer.is_lawyer? == true)
      render json: lawyer.meetings, status: :ok 
    else
      render json: { errors: ['User is not a lawyer']}, status: :method_not_allowed
    end
  end

  private 

  def appointment_params
    params.permit(:date, :time, :description, :client_id, :lawyer_id)
  end
end
