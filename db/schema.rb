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

ActiveRecord::Schema.define(version: 2020_01_12_181933) do

  create_table "analies", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "sub_id"
    t.integer "timestamp"
    t.boolean "b_acc"
    t.string "tags"
    t.integer "rating"
    t.bigint "cfacc_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cfacc_id"], name: "index_analies_on_cfacc_id"
  end

  create_table "cfaccs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "username"
    t.string "realname"
    t.integer "rating"
    t.integer "m_rating"
    t.string "rank"
    t.string "m_rank"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "contests", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "contestId"
    t.string "contestName"
    t.integer "rank"
    t.integer "oldRating"
    t.integer "newRating"
    t.bigint "cfacc_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cfacc_id"], name: "index_contests_on_cfacc_id"
  end

  create_table "submissions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "sub_id"
    t.string "contestId"
    t.string "prob_index"
    t.string "prob_name"
    t.integer "prob_rating"
    t.integer "subaccs"
    t.integer "subwrongs"
    t.bigint "cfacc_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cfacc_id"], name: "index_submissions_on_cfacc_id"
  end

  add_foreign_key "analies", "cfaccs"
  add_foreign_key "contests", "cfaccs"
  add_foreign_key "submissions", "cfaccs"
end
