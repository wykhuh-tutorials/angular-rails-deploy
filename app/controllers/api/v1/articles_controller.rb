module Api
  module V1
    class ArticlesController < ApplicationController
      before_action :set_article, only: [:show, :edit, :update, :destroy]

      def index
        @articles = Article.all
        render json: @articles
      end

      def show
        render json: @article
      end

      def create
      end

      def update
      end

      def destroy
      end

      private

      def set_article
        @article = Article.find(params[:id])
      end

      def article_params
        params.require(:article).permit(:title, :body)
      end
    end
  end
end
