class AllySerializer < ActiveModel::Serializer
  attributes :id, :name, :affiliation

  belongs_to :hero
  
end