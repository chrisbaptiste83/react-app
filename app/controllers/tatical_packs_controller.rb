class TaticalPacksController < ApplicationController
  before_action :set_tatical_pack, only: [:show, :update, :destroy]

  # GET /tatical_packs
  def index
    @tatical_packs = TaticalPack.all

    render json: @tatical_packs
  end

  # GET /tatical_packs/1
  def show
    render json: @tatical_pack
  end

  # POST /tatical_packs
  def create
    @tatical_pack = TaticalPack.new(tatical_pack_params)

    if @tatical_pack.save
      render json: @tatical_pack, status: :created, location: @tatical_pack
    else
      render json: @tatical_pack.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tatical_packs/1
  def update
    if @tatical_pack.update(tatical_pack_params)
      render json: @tatical_pack
    else
      render json: @tatical_pack.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tatical_packs/1
  def destroy
    @tatical_pack.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tatical_pack
      @tatical_pack = TaticalPack.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tatical_pack_params
      params.require(:tatical_pack).permit(:title, :description, :creator)
    end
end
