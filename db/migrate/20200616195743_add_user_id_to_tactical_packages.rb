class AddUserIdToTacticalPackages < ActiveRecord::Migration[6.0]
  def change
    add_column :tactical_packages, :user_id, :integer
  end
end
