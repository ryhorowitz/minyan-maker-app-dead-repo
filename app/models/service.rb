class Service < ApplicationRecord
  belongs_to :shul
  has_many :user_services
  has_many :users, through: :user_services

  validates :name, inclusion: { in: %w[Shacharit Mincha Maariv] }
  validates :time, presence: true
  validates :date, presence: true
  validate :unique_date_shul_combination

  private

  def unique_date_shul_combination
    existing_service = Service.find_by(date: date, shul_id: shul_id)
    return unless existing_service && existing_service != self

    errors.add(:base, 'Service with the same date and shul combination already exists')
  end
end
