class TacticalPackageSerializer < ActiveModel::Serializer 
  
  has_one :primary_weapon
  has_one :secondary_weapon 
  has_one :lethal_weapon 
  has_one :tactical_item 

  attributes :id, :title, :description, :creator 

end
