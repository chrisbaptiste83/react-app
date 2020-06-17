class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :id
  has_many :tactical_packages 
end
