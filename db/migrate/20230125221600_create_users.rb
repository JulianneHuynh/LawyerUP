class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.date :date_of_birth
      t.string :address
      t.string :city_state
      t.string :profile_picture
      t.boolean :is_lawyer
      t.string :specialty
      t.string :law_firm
      t.string :years_in_practice
      t.string :alma_mater
      t.string :board_certification
      t.string :password_digest

      t.timestamps
    end
  end
end
