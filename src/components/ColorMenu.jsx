import { useStore } from "../context/store";

const ColorMenu = () => {
  const [state, dispatch] = useStore();
  const { defaultColor } = state;

  const mockedColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
  ];

  const handleClick = (color) => {
    dispatch({ type: "SET_DEFAULT_COLOR", color });
  };

  const handleClose = () => {
    dispatch({ type: "SET_CELL_WITH_MENU_OPENED", cell: null });
  };

  return (
    <div className="menu">
      <i
        className="fa-solid fa-circle-xmark menu__close-icon"
        onClick={handleClose}
      />
      {mockedColors.map((color) => (
        <div
          key={color}
          className={`menu__color menu__color--${color} ${
            defaultColor === color ? "menu__color--selected" : ""
          }`}
          onClick={() => handleClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorMenu;
