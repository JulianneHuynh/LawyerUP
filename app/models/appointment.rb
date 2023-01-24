class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :lawyer

  validates :date, :time, :description, presence: true

end
