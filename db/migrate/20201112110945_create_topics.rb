class CreateTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :topics do |t|
      t.string :title
      t.string :description
      t.string :video_url
      t.belongs_to :content, null: false, foreign_key: true

      t.timestamps
    end
  end
end
