class PostsController < ApplicationController

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.page params[:page]

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @posts }
    end
  end

  def projects
    @posts = Post.tagged_with("Project", :on => :categories )
  end

  def category
    if params[:name].nil?
      @posts = Post.page params[:page]
    else
      @posts = Post.tagged_with( params[:name], :on => :categories ).page params[:page]
    end
    render :index
  end

  def tag
    if params[:name].nil?
      @posts = Post.page params[:page]
    else
      @posts = Post.tagged_with( params[:name], :on => :tags ).page params[:page]
    end
    render :index
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @post = Post.find(params[:id])

    respond_to do |format|
      format.html# show.html.erb
      format.json { render json: @post }
    end
  end

end
