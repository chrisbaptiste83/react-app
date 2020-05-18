class CreateSecondaryWeapons < ActiveRecord::Migration[6.0]
  def change
    create_table :secondary_weapons do |t|
      t.string :name
      t.text :description 
      t.string :image_url
      t.belongs_to :tactical_package
      t.timestamps
    end
  end
end
