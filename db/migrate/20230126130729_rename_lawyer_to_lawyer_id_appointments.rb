class RenameLawyerToLawyerIdAppointments < ActiveRecord::Migration[7.0]
  def change
    rename_column :appointments, :lawyer, :lawyer_id
  end
end
