Rails.application.routes.draw do
  root 'pages#index'
  
  get 'contents', to: 'pages#contents'
  get 'content/:id', to: 'pages#content'
  get 'topic/:id', to: 'pages#video'
  get 'payment', to: 'pages#payment'
  post 'login', to: 'pages#login'
  get '*path', to: 'pages#index', via: :all
end
