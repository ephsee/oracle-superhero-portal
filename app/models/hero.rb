class Hero < ApplicationRecord
    has_many :villains
    has_many :locations, through: :villains
    has_many :allies
end
