class CreateSubmissions < ActiveRecord::Migration[6.0]
  def change
    create_table :submissions do |t|
      t.string :sub_id
      t.string :contestId
      t.string :prob_index
      t.string :prob_name
      t.integer :prob_rating
      t.integer :subaccs
      t.integer :subwrongs
      t.references :cfacc, null: false, foreign_key: true

      t.timestamps
    end
  end
end
