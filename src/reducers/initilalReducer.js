import { initialState } from "./initialState";
import {
  CREENT_TAP,
  SENTENCE_DATA_CLICK,
  PREVIOUSE_FOLDER,
} from "../actions/action";
const initialStateSave = initialState;
const folderTitle = [];
const creentSentence = [];

const initilalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREENT_TAP:
      return Object.assign({}, state, {
        creentTap: [action.playload.idx],
      });

    case SENTENCE_DATA_CLICK:
      folderTitle.push(state.sentenceData[action.playload.idx].title);
      creentSentence.push(state.sentenceData[action.playload.idx].sentenceData);
      const folderNewArr = [...folderTitle];
      console.log(creentSentence);
      return Object.assign({}, state, {
        sentenceData: creentSentence[creentSentence.length - 1],
        folderTitle: folderNewArr,
        previousState: state.sentenceData[action.playload.idx],
      });

    case PREVIOUSE_FOLDER: {
      folderTitle.pop();
      creentSentence.pop();
      console.log(creentSentence);
      const folderNewArr = [...folderTitle];
      return Object.assign({}, state, {
        sentenceData:
          creentSentence.length !== 0
            ? creentSentence[creentSentence.length - 1]
            : initialState.sentenceData,
        folderTitle: folderNewArr,
        // previousState: state.sentenceData,
      });
    }

    default:
      return state;
  }
};

export default initilalReducer;
