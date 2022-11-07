import Square from "./square";

type Position = {
  [square in Square]: string;
};

export default Position;
