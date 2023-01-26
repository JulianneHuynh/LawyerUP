class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :recipient, :sender, :timestamp, :is_new
end
