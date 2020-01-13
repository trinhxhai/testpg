class CreateAnalies < ActiveRecord::Migration[6.0]
  def change
    create_table :analies do |t|
      t.string :sub_id
      t.integer :timestamp
      t.boolean :b_acc
      t.string :tags
      t.integer :rating
      t.references :cfacc, null: false, foreign_key: true

      t.timestamps
    end
  end
end
