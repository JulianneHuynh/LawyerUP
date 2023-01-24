class CreateLawyers < ActiveRecord::Migration[7.0]
  def change
    create_table :lawyers do |t|
      t.string :email
      t.string :username
      t.date :date_of_birth
      t.string :alma_mater
      t.string :board_certification
      t.string :years_in_practice
      t.string :law_firm
      t.string :location
      t.string :specialty
      t.string :legal_name

      t.timestamps
    end
  end
end
