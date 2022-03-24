class VillainsController < ApplicationController

    def index
        render josn: Villain.all, status: :ok
    end

    def create
        villain = Villain.create(villain_params)
        rander json: villain, status: :created
    end

    def show
        villain = Villain.find(params[:id])
        render json: villain, status: :ok
    end

    def update
        villain = Villain.find(params[:id])
        villain.update(villain_params)
        render json: villain, status: :accepted
    end 

    def destroy
        villain = Villain.find(params[:id])
        villain.destroy
        head :no_content, status: :gone
    end

    private

    def villain_params
        params.permit(:id, :name, :alter_ego, :at_large, :alignment, :image, :most_wanted, :hero_id)
    end

end
