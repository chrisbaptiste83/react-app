class CreateTacticalItems < ActiveRecord::Migration[6.0]
  def change
    create_table :tactical_items do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
