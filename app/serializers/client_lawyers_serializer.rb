class ClientLawyersSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :date_of_birth, :location, :legal_name

  has_many :lawyers
end
