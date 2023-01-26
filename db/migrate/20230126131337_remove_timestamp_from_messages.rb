class RemoveTimestampFromMessages < ActiveRecord::Migration[7.0]
  def change
    remove_column :messages, :timestamp
    rename_column :messages, :is_new, :is_new?

  end
end
