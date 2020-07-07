class TacticalPackagesController < ApplicationController
  before_action :set_tactical_package, only: [:show, :update, :destroy]

  # GET /tactical_packages
  def index
    @tactical_packages = TacticalPackage.all
    render json: @tactical_packages
  end

  # GET /tactical_packages/1
  def show
    render json: @tactical_package
  end

  # POST /tactical_packages
  def create
    @tactical_package = TacticalPackage.create!(tactical_package_params)
    if @tactical_package.save
      render json: {
                status: :created,
                tactical_package: @tactical_package
            }
    else
      render json: @tactical_package.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tactical_packages/1
  def update
    if @tactical_package.update(tactical_package_params)
      render json: @tactical_package
    else
      render json: @tactical_package.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tactical_packages/1
  def destroy
    @tactical_package.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tactical_package
      @tactical_package = TacticalPackage.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tactical_package_params
      params.require(:tactical_package).permit(:user_id, :title, :description, :creator)
    end
end
