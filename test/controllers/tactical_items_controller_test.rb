require 'test_helper'

class TacticalItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tactical_item = tactical_items(:one)
  end

  test "should get index" do
    get tactical_items_url, as: :json
    assert_response :success
  end

  test "should create tactical_item" do
    assert_difference('TacticalItem.count') do
      post tactical_items_url, params: { tactical_item: { description: @tactical_item.description, name: @tactical_item.name } }, as: :json
    end

    assert_response 201
  end

  test "should show tactical_item" do
    get tactical_item_url(@tactical_item), as: :json
    assert_response :success
  end

  test "should update tactical_item" do
    patch tactical_item_url(@tactical_item), params: { tactical_item: { description: @tactical_item.description, name: @tactical_item.name } }, as: :json
    assert_response 200
  end

  test "should destroy tactical_item" do
    assert_difference('TacticalItem.count', -1) do
      delete tactical_item_url(@tactical_item), as: :json
    end

    assert_response 204
  end
end
