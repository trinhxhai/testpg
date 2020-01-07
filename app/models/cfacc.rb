class CfAccountValidator < ActiveModel::Validator
	require 'rest-client'
	def validate(record)
		RestClient.get "https://codeforces.com/api/user.info?handles=#{record[:username]}" do |response,request,result| 
			if 	JSON.parse(response)["status"]=="FAILED"
				 record.errors[:base] << "Username doesn't not exist !"
			end
		end
	end

end

class Cfacc < ApplicationRecord
	validates_with CfAccountValidator
end
