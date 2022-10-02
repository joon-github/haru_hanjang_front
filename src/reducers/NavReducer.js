import { initialState } from "./initialState";
import { CLICK_TO_MENU } from "../actions/action";

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_TO_MENU:
      console.log(state);
      return state.onlyMainView[0].isMain
        ? Object.assign({}, state, {
            onlyMainView: [
              {
                isMain: false,
              },
            ],
          })
        : Object.assign({}, state, {
            onlyMainView: [
              {
                isMain: true,
              },
            ],
          });
    default:
      return state;
  }
};

export default boardReducer;
