require 'redcarpet/compat'

class Post < ActiveRecord::Base

  default_scope order 'created_at DESC'

  paginates_per 5

  acts_as_taggable_on :categories
  acts_as_taggable_on :tags

  belongs_to :user

  attr_accessible :cached_tag_list, :category, :comments_count, :content, :content_html, :slug_url, :summary, :title, :view_count

  serialize :cached_tag_list, Array

  before_save :markdown2html

  def markdown2html
    self.content_html = Markdown.new(self.content).to_html
  end

end
