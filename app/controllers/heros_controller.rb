class HerosController < ApplicationController

    skip_before_action :authorized_hero, only: [:index, :show, :create, :update, :destroy]

    def index
        render json: Hero.all, status: :ok
    end

    # signup for a new hero should create a new hero in db

    def create
        hero = Hero.create!(hero_params)
        render json: hero, status: :created
    end

    def show
        if active_hero
            render json: active_hero, status: :ok
        else
            render json: {error: "No Active Heros"}, status: :unauthorized
        end
    end

    def update
        hero = Hero.find(params[:id])
        hero.update!(hero_params)
        render json: hero, status: :accepted
    end 

    def destroy
        hero = Hero.find_by(id: params[:id])
        hero.destroy!
        render json: {}, status: :gone
    end

    private

    def hero_params
        params.permit(:name, :alter_ego, :base, :image, :password)
    end

end
