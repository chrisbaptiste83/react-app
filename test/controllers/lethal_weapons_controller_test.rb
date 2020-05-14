require 'test_helper'

class LethalWeaponsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lethal_weapon = lethal_weapons(:one)
  end

  test "should get index" do
    get lethal_weapons_url, as: :json
    assert_response :success
  end

  test "should create lethal_weapon" do
    assert_difference('LethalWeapon.count') do
      post lethal_weapons_url, params: { lethal_weapon: { description: @lethal_weapon.description, name: @lethal_weapon.name } }, as: :json
    end

    assert_response 201
  end

  test "should show lethal_weapon" do
    get lethal_weapon_url(@lethal_weapon), as: :json
    assert_response :success
  end

  test "should update lethal_weapon" do
    patch lethal_weapon_url(@lethal_weapon), params: { lethal_weapon: { description: @lethal_weapon.description, name: @lethal_weapon.name } }, as: :json
    assert_response 200
  end

  test "should destroy lethal_weapon" do
    assert_difference('LethalWeapon.count', -1) do
      delete lethal_weapon_url(@lethal_weapon), as: :json
    end

    assert_response 204
  end
end
