class Location < ApplicationRecord

    has_many :villains
    has_many :heros, through: :villains

end
