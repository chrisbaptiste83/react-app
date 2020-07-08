Rails.application.routes.draw do 
  
  resources :users, only: [:create, :show, :index]
  resources :tactical_packages
  resources :tactical_items
  resources :lethal_weapons
  resources :secondary_weapons
  resources :primary_weapons 

  get "/login/status", to: "sessions#is_logged_in?"
  delete '/logout', to: 'sessions#destroy'
  post "/login", to: "sessions#create" 


  
end
