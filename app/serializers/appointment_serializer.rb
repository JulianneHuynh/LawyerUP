class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :description, :client, :lawyer
  has_one :user
  has_one :message
end
