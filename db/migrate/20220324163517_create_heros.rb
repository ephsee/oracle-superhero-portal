class CreateHeros < ActiveRecord::Migration[6.1]
  def change
    create_table :heros do |t|
      t.string :name
      t.string :alter_ego
      t.string :base
      t.string :image

      t.timestamps
    end
  end
end
