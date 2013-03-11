class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|

      t.references :user

      t.string    :title,           :null => false
      t.text      :summary
      t.text      :content,         :null => false
      t.text      :content_html,    :null => false
      t.datetime  :content_updated_at
      t.string    :slug_url
      t.integer   :view_count,      :null => false, :default => 0
      t.integer   :comments_count,  :null => false, :default => 0
      t.string    :cached_tag_list
      t.string    :category

      t.timestamps
    end
    add_index :posts, :user_id
    add_index :posts, :title
    add_index :posts, :content_updated_at
  end
end
