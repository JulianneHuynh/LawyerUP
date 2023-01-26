class RenameClientToClientIdAppointments < ActiveRecord::Migration[7.0]
  def change
    rename_column :appointments, :client, :client_id
  end
end
