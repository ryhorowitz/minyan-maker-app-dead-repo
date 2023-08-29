class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :services
end
