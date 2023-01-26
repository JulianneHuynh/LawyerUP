class Message < ApplicationRecord
  
  has_many :appointments
  has_many :users, through: :appointments

  validates :body, :sender, :recipient, presence: true
end
