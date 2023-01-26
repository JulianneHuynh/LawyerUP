class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :recipient_id, :sender_id, :is_new?, :created_at

  belongs_to :sender
  belongs_to :recipient
end
