class GadgetSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :quantity, :image, :hero_id
  has_one :hero
end
