Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'cfaccs#index'
  match 'load/cfaccs', to: 'cfaccs#load', via: [:get]
  #match 'analysis/cfaccs', to: 'cfaccs#load', via: [:get]
  resources :cfaccs do
  	resources :contests
  	resources :submissions
  	resources :analies
  end
  
end
