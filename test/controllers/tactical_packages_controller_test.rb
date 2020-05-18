require 'test_helper'

class TacticalPackagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tactical_package = tactical_packages(:one)
  end

  test "should get index" do
    get tactical_packages_url, as: :json
    assert_response :success
  end

  test "should create tactical_package" do
    assert_difference('TacticalPackage.count') do
      post tactical_packages_url, params: { tactical_package: { creator: @tactical_package.creator, description: @tactical_package.description, title: @tactical_package.title } }, as: :json
    end

    assert_response 201
  end

  test "should show tactical_package" do
    get tactical_package_url(@tactical_package), as: :json
    assert_response :success
  end

  test "should update tactical_package" do
    patch tactical_package_url(@tactical_package), params: { tactical_package: { creator: @tactical_package.creator, description: @tactical_package.description, title: @tactical_package.title } }, as: :json
    assert_response 200
  end

  test "should destroy tactical_package" do
    assert_difference('TacticalPackage.count', -1) do
      delete tactical_package_url(@tactical_package), as: :json
    end

    assert_response 204
  end
end
