class Image < ApplicationRecord
  belongs_to :cfacc 
  has_one_attached :image
end
