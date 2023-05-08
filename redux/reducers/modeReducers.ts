import { TOGGLE_SIDEBAR, CLOSE, SHOW_MODAL } from "../actions/action";

const InitialState = {
  isSideBarOpen: false,
  isModalOpen: false,
};

export const modeReducers = (state = InitialState, action: any) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };

    case CLOSE:
      return {
        ...state,
        isModalOpen: false,
        isSideBarOpen: false,
      };

    case SHOW_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    default:
      return state;
  }
};

export default modeReducers;
