class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :services, :user_services
end
