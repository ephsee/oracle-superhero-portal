Rails.application.routes.draw do
  
  resources :villains
  resources :locations
  resources :gadgets
  resources :allies
  resources :heros
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
