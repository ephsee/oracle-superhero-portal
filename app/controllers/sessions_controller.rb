class SessionsController < ApplicationController

    skip_before_action :authorized_hero, only: [:login, :logout]

    def login
        hero = Hero.find_by(name: params[:username])
        if hero&.authenticate(params[:password])
            session[:active_hero] = hero.id
            render json: hero, status: :ok
        else
            render json: {errors: "Invalid Username or Password"}, status: :unprocessable_entity
        end
    end

    def logout
        session.delete :active_hero
        head :no_content
    end

end