Rails.application.routes.draw do
  resources :users 
  resources :appointments
  resources :messages, only: [:index, :show, :create]

  get '/lawyers/:id', to: 'users#lawyer'


  get 'appointments/clients/:id', to: 'appointments#client'
  get 'appointments/lawyers/:id', to: 'appointments#lawyer'

  # get 'message/:id', to: 'message#sequence'

# I'm not sure how to go about this. I'm going to ask Princeton in the morning
  # /message/id
  # return most recent message if recipient = :id OR sender = :id

  # /messages/:id
  # return all messages if recipient = :id OR sender = :id



end
