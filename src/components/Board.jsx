import React, { useMemo } from "react";
import Cell from "./Cell";
import useWindowSize from "hooks/useWindowSize";

const Board = () => {
  const { width, height } = useWindowSize();

  const borderSize = 2;
  const cellSize = Math.floor((width - 100 * borderSize) / 100);
  const rows = Math.floor(height / (cellSize + borderSize));

  const cells = useMemo(
    () =>
      Array.from({ length: rows * 100 }, (_, index) => {
        const row = Math.floor(index / 100);
        const col = index % 100;
        return `cell-${row}-${col}`;
      }),
    [rows]
  );

  return (
    <div className="board">
      {cells.map((cell) => (
        <Cell key={cell} id={cell} cellSize={width / 100} />
      ))}
    </div>
  );
};

export default Board;
