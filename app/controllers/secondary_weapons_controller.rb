class SecondaryWeaponsController < ApplicationController
  before_action :set_secondary_weapon, only: [:show, :update, :destroy]

  # GET /secondary_weapons
  def index
    @secondary_weapons = SecondaryWeapon.all

    render json: @secondary_weapons
  end

  # GET /secondary_weapons/1
  def show
    render json: @secondary_weapon
  end

  # POST /secondary_weapons
  def create
    @secondary_weapon = SecondaryWeapon.new(secondary_weapon_params)

    if @secondary_weapon.save
      render json: @secondary_weapon, status: :created, location: @secondary_weapon
    else
      render json: @secondary_weapon.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /secondary_weapons/1
  def update
    if @secondary_weapon.update(secondary_weapon_params)
      render json: @secondary_weapon
    else
      render json: @secondary_weapon.errors, status: :unprocessable_entity
    end
  end

  # DELETE /secondary_weapons/1
  def destroy
    @secondary_weapon.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_secondary_weapon
      @secondary_weapon = SecondaryWeapon.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def secondary_weapon_params
      params.require(:secondary_weapon).permit(:name, :description, :image_url, :tactical_package_id)
    end
end
