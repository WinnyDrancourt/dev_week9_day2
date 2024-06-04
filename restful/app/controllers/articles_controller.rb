class ArticlesController < ApplicationController
  before_action :authenticate_user!, except: %i[ index show ]
  before_action :set_article, only: %i[ show update destroy ]
  before_action :authorize_owner, only: %i[ update destroy ]

  # GET /articles
  def index
    @articles = Article.all

    render json: @articles
  end

  # GET /articles/1
  def show
    render json: @article
  end

  # POST /articles
  def create
    # @article = Article.new(article_params)
    @article = current_user.articles.build(article_params)

    if @article.save
      render json: @article, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:title, :content)
    end

    def get_user_from_token
      jwt_payload = JWT.decode(request.headers["Authorization"].split(" ")[1], Rails.application.credentials.devise[:jwt_secret_key]).first
      user_id = jwt_payload["sub"]
      User.find(user_id.to_s)
    end

    def authorize_owner
      user = get_user_from_token
      return render json: { error: "You are not authorized to perform this action." }, status: :unauthorized if user.nil?
      render json: { error: "You are not authorized to perform this action." }, status: :unauthorized unless @article.user_id == user.id
    end
end
