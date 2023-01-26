class AppointmentUsersSerializer < ActiveModel::Serializer
  attributes  :id, :date, :time, :description, :client_id, :lawyer_id
end
