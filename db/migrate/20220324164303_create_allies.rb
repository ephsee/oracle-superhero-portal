class CreateAllies < ActiveRecord::Migration[6.1]
  def change
    create_table :allies do |t|
      t.string :name
      t.string :alter_ego
      t.string :city
      t.string :image
      t.belongs_to :hero
      t.belongs_to :location
      
      t.timestamps
    end
  end
end
