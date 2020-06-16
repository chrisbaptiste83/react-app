class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :id
  has_many :tactical_packages 
end
