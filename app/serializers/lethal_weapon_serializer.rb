class LethalWeaponSerializer < ActiveModel::Serializer
  belongs_to :tactical_package
  attributes :id, :name, :description, :image_url
end
