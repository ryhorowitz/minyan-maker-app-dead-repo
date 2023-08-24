class Shul < ApplicationRecord
  has_many :services
  # add validations for state being 2 letters
  # postal_code 5 or 10 chars 19145-1212
  columns.each do |c|
    validates c.name.to_sym, presence: true
  end
  validates :state, length: { is: 2 }, format: { with: /\A[A-Z]{2}\z/, message: 'should be two uppercase letters' }
end
