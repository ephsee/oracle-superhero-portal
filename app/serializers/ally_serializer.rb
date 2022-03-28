class AllySerializer < ActiveModel::Serializer
  attributes :id, :name, :alter_ego, :image, :hero_id

  belongs_to :hero
  
end
