# encoding: utf-8
namespace :post do

  desc "TODO"
  task :format => :environment do
    Post.all.each do |post|

      p post.title
      post.content = post.content.gsub(/^\s+/, '').gsub('    ',' ')
      post.save

    end
  end

end
