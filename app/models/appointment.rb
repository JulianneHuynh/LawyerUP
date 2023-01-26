class Appointment < ApplicationRecord
  belongs_to :client, class_name: "User"            
  belongs_to :lawyer, class_name: "User"

  # validates :date, :time, presence: true, uniqueness: true 
  # validates :description, presence: true 
end
