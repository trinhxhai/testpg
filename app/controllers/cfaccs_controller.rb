class CfaccsController < ApplicationController
	def index
		@cfaccs = Cfacc.all
	end
	def new
		@cfacc = Cfacc.new
	end
	def create
		@cfacc = Cfacc.new(cfacc_params)
		if @cfacc.save
			redirect_to @cfacc
		else
			render 'new'
		end
		
	end
	def show
		@cfacc = Cfacc.find(params[:id])
	end
	def edit
		@cfacc = Cfacc.find(params[:id])
	end
	def update
		@cfacc = Cfacc.find(params[:id])
		if @cfacc.update(cfacc_params)
			redirect_to @cfacc
		else
			render 'edit'
		end
	end
	def destroy
		@cfacc = Cfacc.find(params[:id])
		@cfacc.destroy
		redirect_to cfaccs_path
	end
	private
		def cfacc_params
			params.require(:cfacc).permit(:username,:realname)
		end
end
