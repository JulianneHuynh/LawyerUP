class User < ApplicationRecord

  has_secure_password

  # has_many :appointments

  has_many :my_appointments, class_name: "Appointment", foreign_key: "client_id"
  has_many :meetings, class_name: "Appointment", foreign_key: "lawyer_id"

  has_many :lawyers, through: :my_appointments, source: :lawyer
  has_many :clients, through: :meetings, source: :client

  has_many :received_messages, class_name: "Message", foreign_key: "recipient_id"
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id"

  # .authenticate
  #def authenticate(password)
  #   oldPassword = BCrypt::Password.new(self.password_digest)
  #   BCrypt::Engine.hash_secret(password, oldOassword.salt)
  #   self.password_digest == newHash
  #end
  
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
