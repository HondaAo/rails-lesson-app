class PagesController < ApplicationController
  def index
  end
  def contents
    @contents = Content.all
    render json: { data: @contents }
  end
  def content
    @content = Content.find_by(id: params[:id])
    @topics = Topic.where(content_id: params[:id])
    render json: { data:@content, topics: @topics }
  end

  def video
    @topic = Topic.find(params[:id])
    render json: { data: @topic }
  end

  def login
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
        render json: { user: @user, message: 'Successfully Logined!' }
    else
        render json: { status: 401, errors: ['Authentication failed', 'Please confirm your email'] }
    end

  end

  def payment
    Stripe::Charge.create({
      customer: params[:email],
      amount: params[:amount],
      currency: "usd",
    })
  end
  def topics
    @topics = Topic.find(content_id: params[:id])
    render json: @topics
  end
  private
  # def user_params
  #     params.require(:user).permit(:email, :password)
  # end
  def options
    @options ||= { include: %i[topics]}
  end
end
