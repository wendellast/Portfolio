Rails.application.routes.draw do
  root to: "projects#index"
  get "success", to: "projects#success_email"
  get "error", to: "projects#error_email"
end
