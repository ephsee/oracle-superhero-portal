class CreateAllies < ActiveRecord::Migration[6.1]
  def change
    create_table :allies do |t|
      t.string :name
      t.string :affiliation
      t.string :image
      t.belongs_to :hero

      t.timestamps
    end
  end
end
