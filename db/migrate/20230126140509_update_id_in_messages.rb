class UpdateIdInMessages < ActiveRecord::Migration[7.0]
  def change
    rename_column :messages, :sender, :sender_id
    rename_column :messages, :recipient, :recipient_id
  end
end
