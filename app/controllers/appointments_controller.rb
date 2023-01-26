class AppointmentsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :appointment_not_found 
rescue_from ActiveRecord::RecordInvalid, with: :appointment_invalid 

  def index 
    appointment = Appointment.all 
    render json: Appointment.all, status: :ok 
  end

  def show
    appointment = Appointment.find( params[:id] )
    render json: appointment, serializer: AppointmentUsersSerializer, status: :ok 
  end

  def create 
    appointment = Appointment.create!( appointment_params)
    render json: appointment, status: 201
  end

  def update 
    appointment = Appointment.find( params[:id] )
    appointment.update!(appointment_params)
    render json: appointment, status: :accepted
  end

  def destroy 
    appointment = Appointment.find( params[:id] )
    appointment.destroy 
    head :no_content
  end

  private 

  def appointment_params
    params.require( :appointment ).permit( :date, :time, :description, :client, :lawyer , :user_id, :message_id)
  end

  def appointment_invalid invalid_appointment
    render json: { errors: invalid_appointment.record.errors.full_messages }, status: 422
  end

  def appointment_not_found
    render json: { errors: ['Appointment not found']}, status: 404
  end






end
