require 'test_helper'

class TaticalPacksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tatical_pack = tatical_packs(:one)
  end

  test "should get index" do
    get tatical_packs_url, as: :json
    assert_response :success
  end

  test "should create tatical_pack" do
    assert_difference('TaticalPack.count') do
      post tatical_packs_url, params: { tatical_pack: { creator: @tatical_pack.creator, description: @tatical_pack.description, title: @tatical_pack.title } }, as: :json
    end

    assert_response 201
  end

  test "should show tatical_pack" do
    get tatical_pack_url(@tatical_pack), as: :json
    assert_response :success
  end

  test "should update tatical_pack" do
    patch tatical_pack_url(@tatical_pack), params: { tatical_pack: { creator: @tatical_pack.creator, description: @tatical_pack.description, title: @tatical_pack.title } }, as: :json
    assert_response 200
  end

  test "should destroy tatical_pack" do
    assert_difference('TaticalPack.count', -1) do
      delete tatical_pack_url(@tatical_pack), as: :json
    end

    assert_response 204
  end
end
