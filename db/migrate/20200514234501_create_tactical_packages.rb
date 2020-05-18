class CreateTacticalPackages < ActiveRecord::Migration[6.0]
  def change
    create_table :tactical_packages do |t|
      t.string :title
      t.text :description
      t.string :creator
    
      t.timestamps
    end
  end
end
