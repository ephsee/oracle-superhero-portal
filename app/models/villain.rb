class Villain < ApplicationRecord

    belongs_to :hero
    has_many :locations
    has_many :allies
    
end
