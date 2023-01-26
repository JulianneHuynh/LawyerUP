class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :date
      t.string :time
      t.text :description
      t.integer :client
      t.integer :lawyer
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :message, null: false, foreign_key: true

      t.timestamps
    end
  end
end
