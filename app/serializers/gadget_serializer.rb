class GadgetSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :quantity
  has_one :hero
end
