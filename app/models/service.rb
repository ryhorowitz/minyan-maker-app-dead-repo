class Service < ApplicationRecord
  belongs_to :shul
  has_many :user_services
  has_many :users, through: :user_services

  validates :name, inclusion: { in: %w[Shacharit Mincha Maariv] }
  validates :start_datetime, presence: true

  private

  def start_datetime_is_datetime
    return if start_datetime.is_a?(Time)

    errors.add(:start_datetime, 'must be a valid datetime')
  end
end
