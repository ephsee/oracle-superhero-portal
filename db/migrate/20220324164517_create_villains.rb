class CreateVillains < ActiveRecord::Migration[6.1]
  def change
    create_table :villains do |t|
      t.string :name
      t.string :alter_ego
      t.boolean :at_large
      t.integer :most_wanted
      t.string :notes
      t.string :image
      t.belongs_to :hero, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
