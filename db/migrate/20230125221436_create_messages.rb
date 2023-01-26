class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.text :body
      t.integer :recipient
      t.integer :sender
      t.datetime :timestamp
      t.boolean :is_new

      t.timestamps
    end
  end
end
