class CreateGadgets < ActiveRecord::Migration[6.1]
  def change
    create_table :gadgets do |t|
      t.string :item_name
      t.int :quantity
      t.string :image
      t.belongs_to :hero, null: false, foreign_key: true

      t.timestamps
    end
  end
end
