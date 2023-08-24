class Shul < ApplicationRecord
  has_many :services
  # add validations for state being 2 letters
  # postal_code 5 or 10 chars 19145-1212
  columns.each do |c|
    validates c.name.to_sym, presence: true
  end

  validates :state, length: { is: 2 }, format: { with: /\A[A-Z]{2}\z/, message: 'should be two uppercase letters' }
  validate :postal_code_length

  private

  def postal_code_length
    return if :postal_code.length == 5 || :postal_code.length == 10

    errors.add(:postal_code, 'length must be either 5 or 10 characters')
  end
end
