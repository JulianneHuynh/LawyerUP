class ClientsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :client_not_found
rescue_from ActiveRecord::RecordInvalid, with: :client_invalid

def index 
    client = Client.all 
    render json: Client.all, status: :ok  
end 

def show 
    client = Client.find( params[:id] )
    render json: client, serializer: ClientLawyersSerializer, status: :ok
end

def create
    client = Client.create!( client_params )
    render json: client, status: 201
end

def update 
    client = Client.find( params[:id] )
    client.update!(client_params)
    render json: client, status: :accepted
end

def destroy
    client = Client.find( params[:id] )
    client.destroy
    head :no_content
end







private 


def client_params
    params.require( :client ).permit(:email, :username, :date_of_birth, :location, :legal_name, :password)
end


def client_invalid invalid_client
    render json: { errors: invalid_client.record.errors.full_messages }, status: 422
end


def client_not_found
    render json: { errors: ["Client not found"] }, status: 404
end













#
end
