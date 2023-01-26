class UserAppointmentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :date_of_birth, :address, :profile_picture, :is_lawyer?, :specialty, :law_firm, :years_in_practice, :alma_mater, :board_certification, :password_digest
  
  has_many :my_appointments, unless: :is_lawyer?
  has_many :meetings, if :is_lawyer?
  
end
