class Client < ApplicationRecord

  has_many :appointments, dependent: :destroy 
  has_many :lawyers, through: :appointments

  validates :legal_name, presence: true
  validates :email, :username, presence: true, uniqueness: true
  validates :date_of_birth, comparison: { greater_than: 1700/01/23, end_date: 2005/01/23 }

  

end
