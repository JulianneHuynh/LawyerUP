class AddPasswordDigestToLawyers < ActiveRecord::Migration[7.0]
  def change
    add_column :lawyers, :password_digest, :string
  end
end
