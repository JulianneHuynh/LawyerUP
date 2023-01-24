class LawyerSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :date_of_birth, :alma_mater, :board_certification, :years_in_practice, :law_firm, :location, :specialty, :legal_name

  
end
