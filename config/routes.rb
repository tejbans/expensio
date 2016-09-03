Rails.application.routes.draw do
  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :expenses
    end
  end
end
