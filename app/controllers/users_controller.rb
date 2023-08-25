class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  def show
    puts 'in show method from user_controller'
    render json: current_user
  end

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def destroy
    reset_session
    render status: :no_content
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
