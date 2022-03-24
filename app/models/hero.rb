class Hero < ApplicationRecord

    has_many :villains
    has_many :locations, through: :villains
    has_many :allies
    has_many :gadgets

    validates :name, presence: true, uniqueness: true

end
