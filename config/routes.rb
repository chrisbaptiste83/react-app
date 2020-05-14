Rails.application.routes.draw do
  resources :tactical_items
  resources :lethal_weapons
  resources :secondary_weapons
  resources :primary_weapons
  resources :tatical_packs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
