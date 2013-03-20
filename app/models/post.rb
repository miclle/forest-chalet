
require 'redcarpet/compat'
class Post < ActiveRecord::Base
  belongs_to :user
  attr_accessible :cached_tag_list, :category, :comments_count, :content, :content_html, :slug_url, :summary, :title, :view_count

  def content_html
    Markdown.new(content).to_html
  end

end
