class VillainSerializer < ActiveModel::Serializer
  attributes :id, :name, :alter_ego, :at_large, :most_wanted, :alignment
  has_one :hero
end
