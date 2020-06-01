class TacticalItemsController < ApplicationController
  before_action :set_tactical_item, only: [:show, :update, :destroy]

  # GET /tactical_items
  def index
    @tactical_items = TacticalItem.all

    render json: @tactical_items
  end

  # GET /tactical_items/1
  def show
    render json: @tactical_item
  end

  # POST /tactical_items
  def create
    @tactical_item = TacticalItem.new(tactical_item_params)

    if @tactical_item.save
      render json: @tactical_item, status: :created, location: @tactical_item
    else
      render json: @tactical_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tactical_items/1
  def update
    if @tactical_item.update(tactical_item_params)
      render json: @tactical_item
    else
      render json: @tactical_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tactical_items/1
  def destroy
    @tactical_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tactical_item
      @tactical_item = TacticalItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tactical_item_params
      params.require(:tactical_item).permit(:name, :description, :image_url, :tactical_package_id)
    end
end
