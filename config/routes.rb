Rails.application.routes.draw do
  resources :users
  get '*path', to: "application#fallback_index_html"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
