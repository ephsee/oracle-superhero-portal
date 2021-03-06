class VillainsController < ApplicationController

    skip_before_action :authorized_hero, only: [:index, :show, :create, :update, :destroy]

    def index
        render json: Villain.all.order(id: :ASC), status: :ok
    end

    def create
        villain = Villain.create!(villain_params)
        render json: villain, status: :created
    end

    def show
        villain = Villain.find(params[:id])
        render json: villain, status: :ok
    end

    def update
        villain = Villain.find(params[:id])
        villain.update!(villain_params)
        render json: villain, status: :accepted
    end 

    def destroy
        villain = Villain.find(params[:id])
        villain.destroy!
        render json: {}, status: :gone
    end

    private

    def villain_params
        params.permit(:id, :name, :alter_ego, :at_large, :notes, :image, :most_wanted, :hero_id, :location_id)
    end

end
