class User < ApplicationRecord

  has_secure_password

  has_many :my_appointments, class_name: "Appointment", foreign_key: "client_id"
  has_many :meetings, class_name: "Appointment", foreign_key: "lawyer_id"

  has_many :lawyers, through: :my_appointments, source: :lawyer
  has_many :clients, through: :meetings, source: :client

  has_many :received_messages, class_name: "Message", foreign_key: "recipient_id"
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id"

  def all_messages
    messages = self.received_messages + self.sent_messages
    sorted = messages.sort { |a, b| a.created_at <=> b.created_at }
    sorted
  end

  def most_recent_message
    messages = self.all_messages
    last = messages.last
    last
  end

  # validates :email, presence: true, uniqueness: true

  # validates :date_of_birth, :name, :board_certification, :specialty, presence: true 
  # validate :validate_date_of_birth 

  # private 

  # def validate_date_of_birth
  #   if date_of_birth.present? && date_of_birth > 18.years.ago.to_i
  #     errors.add( :date_of_birth, 'Must e 18 years of age to sign up!' ) 
  #   end
  # end
end
