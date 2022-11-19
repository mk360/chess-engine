import PieceType from "./piece-type";
import Square from "./square";

type Position = {
  [square in Square]: PieceType;
};

export default Position;
