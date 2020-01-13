class Cfacc < ApplicationRecord
	has_many :contests, dependent: :destroy
	has_many :submissions, dependent: :destroy
	has_many :analies, dependent: :destroy
end
