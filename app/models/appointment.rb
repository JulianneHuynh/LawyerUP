class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :message

  validates :date, :time, presence: true, uniqueness: true 
  validates :description, presence: :true 
end
