class AllySerializer < ActiveModel::Serializer
  attributes :id, :name, :alter_ego, :image, :hero_id, :location_id

  belongs_to :hero
  belongs_to :location
  
end
