class UpdateUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :is_lawyer, :is_lawyer?
    remove_column :users, :city_state
  end
end
