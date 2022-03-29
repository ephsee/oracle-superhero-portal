class GadgetsController < ApplicationController

    skip_before_action :authorized_hero, only: [:index, :show, :create, :update, :destroy]

    def index
        render json: Gadget.all.order(id: :ASC), status: :ok
    end

    def create
        gadget = Gadget.create!(gadget_params)
        render json: gadget, status: :created
    end

    def show
        gadget = Gadget.find(params[:id])
        render json: gadget, status: :ok
    end

    def update
        gadget = Gadget.find(params[:id])
        gadget.update!(gadget_params)
        render json: gadget, status: :accepted
    end 

    def destroy
        gadget = Gadget.find(params[:id])
        gadget.destroy!
        render json: {}, status: :gone
    end

    private

    def gadget_params
        params.permit(:item_name, :quantity, :image, :hero_id)
    end

end
