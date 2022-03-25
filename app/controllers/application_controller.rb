class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorized_hero

  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :not_valid

  def active_hero
    hero = Hero.find_by(id: session[:active_hero])
  end

  def authorized_hero
    return render json: { errors: "Hero Not Authorized" }, status: :unauthorized unless authorized_hero
  end



  private

  def not_found(error)
    render json: {error: error.model + " not found"}, status: :not_found
  end

  def not_valid(invalid)
    render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
