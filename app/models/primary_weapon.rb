class PrimaryWeapon < ApplicationRecord 
    belongs_to :tactical_package, optional: true
end
