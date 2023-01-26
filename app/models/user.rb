class User < ApplicationRecord

  has_many :lawyers, :through => :appointments
  has_many :clients, :through => :appointments

  validates :email, presence: true, uniqueness: true

  validates :date_of_birth, :name, :board_certification, :specialty, presence: true 
  validate :validate_date_of_birth 

  private 

  def validate_date_of_birth
    if date_of_birth.present? && date_of_birth > 18.years.ago.to_i
      errors.add( :date_of_birth, 'Must e 18 years of age to sign up!' ) 
    end
  end
end
