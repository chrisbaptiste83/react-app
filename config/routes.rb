Rails.application.routes.draw do 
  
  resources :users
  resources :tactical_packages
  resources :tactical_items
  resources :lethal_weapons
  resources :secondary_weapons
  resources :primary_weapons 

  get "/login/status", to: "sessions#is_logged_in?"
  delete "/logout/:id", to: "sessions#destroy"
<<<<<<< HEAD
  post "/login", to: "sessions#create"
=======
  post "/login", to: "sessions#create" 

  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
>>>>>>> parent of a44cced... update for user authentication using session cookies
  
end
