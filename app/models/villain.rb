class Villain < ApplicationRecord

    belongs_to :hero
    has_many :locations
    
end
