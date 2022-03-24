class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :image
      t.belongs_to :villain, null: false, foreign_key: true

      t.timestamps
    end
  end
end
