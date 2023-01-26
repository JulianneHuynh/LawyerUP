class MessageUsersSerializer < ActiveModel::Serializer
  attributes  :id, :body, :recipient, :sender, :timestamp, :is_new

  has_many :users
end
