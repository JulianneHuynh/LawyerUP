class RemoveUnneededFromAppointments < ActiveRecord::Migration[7.0]
  def change
    remove_column :appointments, :message_id
    remove_column :appointments, :user_id
  end
end
