class HeroSerializer < ActiveModel::Serializer
  attributes :id, :name, :alter_ego, :base, :image
  has_many :allies
  has_many :gadgets
  has_many :villains
  has_many :locations, through: :villains
end
