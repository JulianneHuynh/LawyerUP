class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :description
  has_one :client
  has_one :lawyer
end
