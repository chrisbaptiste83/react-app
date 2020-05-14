require 'test_helper'

class SecondaryWeaponsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @secondary_weapon = secondary_weapons(:one)
  end

  test "should get index" do
    get secondary_weapons_url, as: :json
    assert_response :success
  end

  test "should create secondary_weapon" do
    assert_difference('SecondaryWeapon.count') do
      post secondary_weapons_url, params: { secondary_weapon: { description: @secondary_weapon.description, name: @secondary_weapon.name } }, as: :json
    end

    assert_response 201
  end

  test "should show secondary_weapon" do
    get secondary_weapon_url(@secondary_weapon), as: :json
    assert_response :success
  end

  test "should update secondary_weapon" do
    patch secondary_weapon_url(@secondary_weapon), params: { secondary_weapon: { description: @secondary_weapon.description, name: @secondary_weapon.name } }, as: :json
    assert_response 200
  end

  test "should destroy secondary_weapon" do
    assert_difference('SecondaryWeapon.count', -1) do
      delete secondary_weapon_url(@secondary_weapon), as: :json
    end

    assert_response 204
  end
end
