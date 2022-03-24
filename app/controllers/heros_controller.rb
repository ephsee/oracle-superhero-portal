class HerosController < ApplicationController

    def index
        render json: Hero.all, status: :ok
    end

    def create
        hero = Hero.create(hero_params)
        rander json: hero, status: :created
    end

    def show
        hero = Hero.find(params[:id])
        render json: hero, status: :ok
    end

    def update
        hero = Hero.find(params[:id])
        hero.update(hero_params)
        render json: hero, status: :accepted
    end 

    def destroy
        hero = Hero.find(params[:id])
        hero.destroy
        head :no_content, status: :gone
    end

    private

    def hero_params
        params.permit(:name, :alter_ego, :base, :image)
    end

end
