class CreateCfaccs < ActiveRecord::Migration[6.0]
  def change
    create_table :cfaccs do |t|
      t.string :username
      t.string :realname
      t.integer :rating
      t.integer :m_rating
      t.string :rank
      t.string :m_rank

      t.timestamps
    end
  end
end
