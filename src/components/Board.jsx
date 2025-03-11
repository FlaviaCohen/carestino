import React, { useMemo } from "react";
import Cell from "./Cell";
import useWindowSize from "hooks/useWindowSize";

const Board = () => {
  const { width, height } = useWindowSize();

  const borderSize = 1;
  const cellSize = Math.floor((width - 100 * borderSize) / 100);
  const rows = Math.floor(
    (height - borderSize * 2) / (cellSize + borderSize * 2)
  );
  const totalCells = rows * 100;

  const cells = useMemo(
    () =>
      Array.from({ length: totalCells }, (_, index) => {
        const row = Math.floor(index / 100);
        const col = index % 100;
        return `cell-${row}-${col}`;
      }),
    [width, height, totalCells]
  );

  return (
    <div className="board">
      {cells.map((cell) => (
        <Cell key={cell} id={cell} cellSize={cellSize} />
      ))}
    </div>
  );
};

export default Board;
