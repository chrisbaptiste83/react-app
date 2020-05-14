class PrimaryWeaponsController < ApplicationController
  before_action :set_primary_weapon, only: [:show, :update, :destroy]

  # GET /primary_weapons
  def index
    @primary_weapons = PrimaryWeapon.all

    render json: @primary_weapons
  end

  # GET /primary_weapons/1
  def show
    render json: @primary_weapon
  end

  # POST /primary_weapons
  def create
    @primary_weapon = PrimaryWeapon.new(primary_weapon_params)

    if @primary_weapon.save
      render json: @primary_weapon, status: :created, location: @primary_weapon
    else
      render json: @primary_weapon.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /primary_weapons/1
  def update
    if @primary_weapon.update(primary_weapon_params)
      render json: @primary_weapon
    else
      render json: @primary_weapon.errors, status: :unprocessable_entity
    end
  end

  # DELETE /primary_weapons/1
  def destroy
    @primary_weapon.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_primary_weapon
      @primary_weapon = PrimaryWeapon.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def primary_weapon_params
      params.require(:primary_weapon).permit(:name, :description)
    end
end
