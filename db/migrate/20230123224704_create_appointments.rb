class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :date
      t.string :username
      t.string :time
      t.text :description
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :lawyer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
