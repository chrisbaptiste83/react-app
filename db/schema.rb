# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_14_234501) do

  create_table "lethal_weapons", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "image_url"
    t.integer "tactical_package_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tactical_package_id"], name: "index_lethal_weapons_on_tactical_package_id"
  end

  create_table "primary_weapons", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "image_url"
    t.integer "tactical_package_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tactical_package_id"], name: "index_primary_weapons_on_tactical_package_id"
  end

  create_table "secondary_weapons", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "image_url"
    t.integer "tactical_package_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tactical_package_id"], name: "index_secondary_weapons_on_tactical_package_id"
  end

  create_table "tactical_items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "image_url"
    t.integer "tactical_package_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tactical_package_id"], name: "index_tactical_items_on_tactical_package_id"
  end

  create_table "tactical_packages", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "creator"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
