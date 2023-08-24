class User < ApplicationRecord
  has_secure_password
  has_many :user_services
  has_many :services, through: :user_services
end
