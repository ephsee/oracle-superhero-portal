class AlliesController < ApplicationController

    def index
        render json: Ally.all, status: :ok
    end

    def create
        ally = Ally.create(ally_params)
        rander json: ally, status: :created
    end

    def show
        ally = Ally.find(params[:id])
        render json: ally, status: :ok
    end

    def update
        ally = Ally.find(params[:id])
        ally.update(ally_params)
        render json: ally, status: :accepted
    end 

    def destroy
        ally = Ally.find(params[:id])
        ally.destroy
        head :no_content, status: :gone
    end

    private

    def ally_params
        params.permit(:name, :affiliation, :image, :hero_id,)
    end

end
