import { useState, useEffect } from "react";
import ColorMenu from "./ColorMenu";
import { useStore } from "../context/store";

const Cell = ({ id, cellSize }) => {
  const [state, dispatch] = useStore();
  const { defaultColor, cellWithMenuOpened, activeCells, isMouseDown } = state;
  const [color, setColor] = useState(defaultColor);

  const handleClick = () => {
    if (
      !activeCells.includes(id) ||
      (activeCells.includes(id) && color !== defaultColor)
    ) {
      dispatch({ type: "ADD_ACTIVE_CELL", cell: id });
      dispatch({ type: "SET_CELL_WITH_MENU_OPENED", cell: null });
      setColor(defaultColor);
    }

    if (activeCells.includes(id) && color === defaultColor) {
      dispatch({ type: "REMOVE_ACTIVE_CELL", cell: id });
    }
  };

  const handleMouseDown = () => {
    dispatch({ type: "SET_IS_MOUSE_DOWN", isMouseDown: true });
  };

  const handleMouseUp = () => {
    dispatch({ type: "SET_IS_MOUSE_DOWN", isMouseDown: false });
  };

  const handleMouseMove = () => {
    isMouseDown && handleClick();
  };

  const handleContextMenuClick = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_CELL_WITH_MENU_OPENED", cell: id });
  };

  useEffect(() => {
    if (!activeCells.includes(id)) {
      setColor(defaultColor);
    }
  }, [defaultColor, activeCells, id]);

  return (
    <div
      style={{ width: cellSize, height: cellSize }}
      className={`cell ${
        activeCells.includes(id)
          ? `cell__colored--${color}`
          : "cell__color--white"
      }`}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onContextMenu={handleContextMenuClick}
    >
      {cellWithMenuOpened === id && <ColorMenu />}
    </div>
  );
};

export default Cell;
