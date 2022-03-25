class Hero < ApplicationRecord

    has_secure_password

    has_many :villains, dependent: :destroy
    has_many :locations, through: :villains
    has_many :allies, dependent: :destroy
    has_many :gadgets, dependent: :destroy

    validates :name, presence: true, uniqueness: true

end
