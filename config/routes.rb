Rails.application.routes.draw do
  resources :users 
  resources :appointments
  resources :messages, only: [:index, :show, :create]

  get '/lawyer/:id', to: 'users#lawyer'
  get '/lawyers', to: 'users#lawyers'

  get 'appointments/client/:id', to: 'appointments#client'
  get 'appointments/lawyer/:id', to: 'appointments#lawyer'

  get '/messages/all/:id', to: 'messages#all_messages'
  get '/messages/most_recent/:id', to: 'messages#most_recent_message'

end
