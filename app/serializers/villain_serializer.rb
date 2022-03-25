class VillainSerializer < ActiveModel::Serializer
  attributes :id, :name, :alter_ego, :at_large, :most_wanted, :notes, :image
  has_one :location
  has_one :hero
end
