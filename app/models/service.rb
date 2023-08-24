class Service < ApplicationRecord
  belongs_to :shul
  has_many: :user_services
  has_many: :users, through: :user_services
end
