Rails.application.routes.draw do
  resources :users 
  resources :appointments
  resources :messages, only: [:index, :show, :create]

  post '/signin', to: 'users#signin'

  post '/signin', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'

  get '/lawyer/:id', to: 'users#lawyer'


  get 'appointments/clients/:id', to: 'appointments#client'
  get 'appointments/lawyers/:id', to: 'appointments#lawyer'


 


  # /message/id
  # return most recent message if recipient = :id OR sender = :id

  # /messages/:id
  # return all messages if recipient = :id OR sender = :id



end
