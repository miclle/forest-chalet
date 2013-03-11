# encoding: utf-8
module ApplicationHelper

  # gravatar image src
  # <%= gravatar "miclle.zheng@gmail.com", 150 %>
  # => "http://gravatar.com/avatar/004794ff3508e44c4902fd82ef4027f4.png?default=monsterid&size=150"
  # default_image:  ['http://example.com/images/default_gravitar.jpg', "identicon", "monsterid", "wavatar", "404" ]
  # filetype:       ['gif', 'jpg' or 'png'].  Gravatar's default is png
  # rating:         ['G', 'PG', 'R', 'X']. Gravatar's default is G
  # size:           (1..512), default is 80
  def gravatar(email, options = {})
    configuration = {
      :default_image  =>  nil,
      :file_type      =>  "png",
      :size           =>  80
    }
    configuration.update(options) if options.is_a?(Hash)

    "http://gravatar.com/avatar/#{Digest::MD5.hexdigest(email.downcase)}.#{configuration[:file_type]}?default=#{configuration[:default_image]}&size=#{configuration[:size]}" unless email.blank?
  end

  # Format time
  def strftime(time, format = "%m/%d %H:%M")
    time.strftime(format) unless time.blank?
  end

  # Date format
  # date_format dateime => "2003-04-09"
  def date_format(datetime)
    datetime.strftime("%Y年%m月%d日") unless datetime.blank?
  end

  # Datetime format
  # datetime_format(dateime) result: "2003年04月09日 15:30:50"
  def datetime_format(datetime, options={})
    configuration = { :year => true, :month => true, :day => true, :hour => true, :minute => true, :second => false }
    configuration.update(options) if options.is_a?(Hash)
    format = ""
    format << "%Y-" if configuration[:year]
    format << "%m-" if configuration[:month]
    format << "%d " if configuration[:day]
    format << "%H"  if configuration[:hour]
    format << ":%M" if configuration[:minute]
    format << ":%S" if configuration[:second]
    datetime.strftime(format) unless datetime.blank?
  end

end
