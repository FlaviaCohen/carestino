export const initialState = {
  defaultColor: "black",
  cellWithMenuOpened: null,
  activeCells: [],
  isMouseDown: false,
};

export const reducer = (state = initialState, action) => {
  const helper = {
    SET_DEFAULT_COLOR: { ...state, defaultColor: action.color },
    SET_CELL_WITH_MENU_OPENED: { ...state, cellWithMenuOpened: action.cell },
    ADD_ACTIVE_CELL: {
      ...state,
      activeCells: [...state.activeCells, action.cell],
    },
    REMOVE_ACTIVE_CELL: {
      ...state,
      activeCells: state.activeCells.filter((cell) => cell !== action.cell),
    },
    SET_IS_MOUSE_DOWN: {
      ...state,
      isMouseDown: action.isMouseDown,
    },
  };
  return helper[action.type] || state;
};
