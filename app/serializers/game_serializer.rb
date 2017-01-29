class GameSerializer < ActiveModel::Serializer
  attributes :id, :field, :date, :opponent
end
