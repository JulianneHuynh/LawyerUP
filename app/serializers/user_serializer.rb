class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :date_of_birth, :address, :city_state, :profile_picture, :is_lawyer, :specialty, :law_firm, :years_in_practice, :alma_mater, :board_certification, :password_digest
end
