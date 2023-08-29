class UserServiceController < ApplicationController
  def create
    # byebug
    user_service = UserService.create!(user_service_params)
    render json: user_service, status: :created
  end

  private

  def user_service_params
    params.permit(:user_id, :service_id)
  end
end
