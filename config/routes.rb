Rails.application.routes.draw do
  resources :users
  post '/contact_us', to: "users#contact_us"
  get '*path', to: "application#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
