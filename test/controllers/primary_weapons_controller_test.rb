require 'test_helper'

class PrimaryWeaponsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @primary_weapon = primary_weapons(:one)
  end

  test "should get index" do
    get primary_weapons_url, as: :json
    assert_response :success
  end

  test "should create primary_weapon" do
    assert_difference('PrimaryWeapon.count') do
      post primary_weapons_url, params: { primary_weapon: { description: @primary_weapon.description, name: @primary_weapon.name } }, as: :json
    end

    assert_response 201
  end

  test "should show primary_weapon" do
    get primary_weapon_url(@primary_weapon), as: :json
    assert_response :success
  end

  test "should update primary_weapon" do
    patch primary_weapon_url(@primary_weapon), params: { primary_weapon: { description: @primary_weapon.description, name: @primary_weapon.name } }, as: :json
    assert_response 200
  end

  test "should destroy primary_weapon" do
    assert_difference('PrimaryWeapon.count', -1) do
      delete primary_weapon_url(@primary_weapon), as: :json
    end

    assert_response 204
  end
end
