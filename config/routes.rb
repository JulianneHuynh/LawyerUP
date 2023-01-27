Rails.application.routes.draw do
  resources :users 
  resources :appointments
  resources :messages, only: [:index, :show, :create]

  # post '/signin', to: 'users#signin'


  get '/authorize', to: "users#show"
  # doesnt send info back, checks to see if session has anything in it
  post '/signin', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'

  get '/lawyer/:id', to: 'users#lawyer'
  get '/lawyers', to: 'users#lawyers'

  get 'appointments/client/:id', to: 'appointments#client'
  get 'appointments/lawyer/:id', to: 'appointments#lawyer'

  get '/messages/all/:id', to: 'messages#all_messages'
  get '/messages/most_recent/:id', to: 'messages#most_recent_message'

  get 'appointments/clients/:id', to: 'appointments#client'
  get 'appointments/lawyers/:id', to: 'appointments#lawyer'


  # /message/id
  # return most recent message if recipient = :id OR sender = :id

  # /messages/:id
  # return all messages if recipient = :id OR sender = :id


end
