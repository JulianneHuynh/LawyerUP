class ClientSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :date_of_birth, :location, :legal_name
end
