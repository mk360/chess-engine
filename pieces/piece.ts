import Board from "../board";
import Square from "../square";
import PieceType from '../piece-type';

type Color = 'White' | 'Black';

abstract class Piece {
  private board: Board;
  private startingSquare: Square;
  private currentSquare: Square;

  abstract getLegalMoves(): Square[];
  abstract getMovementPattern(): Square[];

  constructor(startingSquare: Square) {
    this.startingSquare = startingSquare;
    this.currentSquare = startingSquare;
  }
}

export default Piece;
