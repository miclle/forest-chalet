# encoding: utf-8
class Chalet::BaseController < ApplicationController

  before_filter :require_login

  layout "chalet"

end
