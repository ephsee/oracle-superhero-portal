class Villain < ApplicationRecord

    belongs_to :hero
    belongs_to :location

    validates :name, presence: true
    validates :image, presence: true
    
end
