class CreateContests < ActiveRecord::Migration[6.0]
  def change
    create_table :contests do |t|
      t.string :contestId
      t.string :contestName
      t.integer :rank
      t.integer :oldRating
      t.integer :newRating
      t.references :cfacc, null: false, foreign_key: true

      t.timestamps
    end
  end
end
