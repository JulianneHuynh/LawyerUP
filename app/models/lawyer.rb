class Lawyer < ApplicationRecord

  has_many :appointments
  has_many :clients, through: :appointments

  has_secure_password

  validates :legal_name, :specialty, presence: true
  # validates :date_of_birth, comparison: { greater_than: 1900/01/23, end_date: 2005/01/23}
  validates :email, :username, presence: true, uniqueness: true, confirmation: true
  # validates :date_of_birth, presence: true, numercality: {greater_than: 2005/01/23}
 
end
