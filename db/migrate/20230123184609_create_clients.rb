class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :email
      t.string :username
      t.date :date_of_birth
      t.string :location
      t.string :legal_name

      t.timestamps
    end
  end
end
