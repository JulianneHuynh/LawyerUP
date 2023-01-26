Rails.application.routes.draw do
  resources :users 
  resources :appointments
  resources :messages, only: [:index, :show, :create]

  get '/lawyer/:id', to: 'users#lawyer'


  get 'appointments/client/:id', to: 'appointments#client'
  get 'appointments/lawyer/:id', to: 'appointments#lawyer'

  # get 'message/:id', to: 'message#sequence'

# I'm not sure how to go about this. I'm going to ask Princeton in the morning
  # /message/id
  # return most recent message if recipient = :id OR sender = :id

  # /messages/:id
  # return all messages if recipient = :id OR sender = :id



end
