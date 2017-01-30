class Api::V1::GamesController < ApplicationController

  before_action :find_game, only: [:show, :update, :destroy]

  def index
    render json: Game.all
  end

  def show
    if @game
      render json: @game
    else
      render json: { error: "Could not find this game", status: 404 }, status: 404
    end
  end

  def create
    game = Game.create(game_params)
    if game.save
      render json: game
    else
      render json: { error: "This game was not created!", status: 500 }, status: 500
    end
  end

  def update
    if @game.update(game_params)
      render json: @game
    else
      render json: { error: "This game was not updated!", status: 500 }, status: 500
    end
  end

  def destroy
    @game.destroy
    render json: {message: "Game was destroyed", status: 200}, status: 200
  end

  private

  def game_params
    params.require(:game).permit(:field, :opponent, :date)
  end

  def find_game
    @game = Game.find_by(id: params[:id])
  end
end
