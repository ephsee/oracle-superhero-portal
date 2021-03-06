class LocationsController < ApplicationController

    skip_before_action :authorized_hero, only: [:index, :show, :create, :update, :destroy]

    def index
        render json: Location.all, status: :ok
    end

    def create
        location = Location.create!(location_params)
        render json: location, status: :created
    end

    def show
        location = Location.find(params[:id])
        render json: location, status: :ok
    end

    def update
        location = Location.find(params[:id])
        location.update!(location_params)
        render json: location, status: :accepted
    end 

    def destroy
        location = Location.find(params[:id])
        location.destroy!
        render json: {}, status: :gone
    end

    private

    def location_params
        params.permit(:id, :name, :image, :villain_id)
    end

end
