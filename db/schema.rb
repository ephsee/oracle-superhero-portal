# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_24_164517) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "allies", force: :cascade do |t|
    t.string "name"
    t.string "alter_ego"
    t.string "city"
    t.string "image"
    t.bigint "hero_id"
    t.bigint "location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hero_id"], name: "index_allies_on_hero_id"
    t.index ["location_id"], name: "index_allies_on_location_id"
  end

  create_table "gadgets", force: :cascade do |t|
    t.string "item_name"
    t.integer "quantity"
    t.string "image"
    t.bigint "hero_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hero_id"], name: "index_gadgets_on_hero_id"
  end

  create_table "heros", force: :cascade do |t|
    t.string "name"
    t.string "alter_ego"
    t.string "base"
    t.string "image"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "villains", force: :cascade do |t|
    t.string "name"
    t.string "alter_ego"
    t.boolean "at_large"
    t.integer "most_wanted"
    t.string "notes"
    t.string "image"
    t.bigint "hero_id", null: false
    t.bigint "location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hero_id"], name: "index_villains_on_hero_id"
    t.index ["location_id"], name: "index_villains_on_location_id"
  end

  add_foreign_key "gadgets", "heros"
  add_foreign_key "villains", "heros"
  add_foreign_key "villains", "locations"
end
