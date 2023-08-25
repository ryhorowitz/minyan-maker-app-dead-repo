class Service < ApplicationRecord
  belongs_to :shul
  has_many :user_services
  has_many :users, through: :user_services

  validates :name, inclusion: { in: %w[Shacharit Mincha 'Maariv] }
  validates :time, presence: true
  validates :date, presence: true
end
