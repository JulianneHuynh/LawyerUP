class MessageUsersSerializer < ActiveModel::Serializer
  attributes :id, :body, :recipient, :sender, :is_new?

  has_many :sent_messages
  has_many :received_messages
  
end
