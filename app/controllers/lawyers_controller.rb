class LawyersController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :lawyer_not_found
rescue_from ActiveRecord::RecordInvalid, with: :lawyer_invalid

def index 
    lawyer = Lawyer.all 
    render json: Lawyer.all, status: :ok  
end 

def show 
    lawyer = Lawyer.find( params[:id] )
    render json: lawyer, serializer: LawyerClientsSerializer, status: :ok
end

def create
    lawyer = Lawyer.create!( lawyer_params )
    render json: client, status: 201
end

def update 
    lawyer = Lawyer.find( params[:id] )
    lawyer.update!( lawyer_params )
    render json: client, status: :accepted
end

def destroy
    lawyer = Lawyer.find( params[:id] )
    lawyer.destroy
    head :no_content
end







private 


def lawyer_params
    params.require( :lawyer ).permit(:email, :username, :date_of_birth, :alma_mater, :board_certification, :years_in_practice, :law_firm, :location, :specialty, :legal_name)
end


def lawyer_invalid invalid_lawyer
    render json: { errors: invalid_lawyer.record.errors.full_messages }, status: 422
end


def lawyer_not_found
    render json: { errors: ["Lawyer not found"] }, status: 404
end
end
