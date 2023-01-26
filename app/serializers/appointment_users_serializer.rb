class AppointmentUsersSerializer < ActiveModel::Serializer
  attributes  :id, :date, :time, :description, :client, :lawyer

  has_many :users 
  has_many :mesages, through: :users
end
