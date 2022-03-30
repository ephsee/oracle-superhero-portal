class Gadget < ApplicationRecord

    belongs_to :hero

    validates :item_name, uniqueness: true

end
