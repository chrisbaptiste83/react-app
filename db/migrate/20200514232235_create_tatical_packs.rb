class CreateTaticalPacks < ActiveRecord::Migration[6.0]
  def change
    create_table :tatical_packs do |t|
      t.string :title
      t.text :description
      t.string :creator

      t.timestamps
    end
  end
end
