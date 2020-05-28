class LethalWeaponsController < ApplicationController
  before_action :set_lethal_weapon, only: [:show, :update, :destroy]

  # GET /lethal_weapons
  def index
    @lethal_weapons = LethalWeapon.all

    render json: @lethal_weapons
  end

  # GET /lethal_weapons/1
  def show
    render json: @lethal_weapon
  end

  # POST /lethal_weapons
  def create
    @lethal_weapon = LethalWeapon.new(lethal_weapon_params)

    if @lethal_weapon.save
      render json: @lethal_weapon, status: :created, location: @lethal_weapon
    else
      render json: @lethal_weapon.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lethal_weapons/1
  def update
    if @lethal_weapon.update(lethal_weapon_params)
      render json: @lethal_weapon
    else
      render json: @lethal_weapon.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lethal_weapons/1
  def destroy
    @lethal_weapon.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lethal_weapon
      @lethal_weapon = LethalWeapon.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lethal_weapon_params
      params.require(:lethal_weapon).permit(:name, :description, :image_url, :tactical_package_id)
    end
end
