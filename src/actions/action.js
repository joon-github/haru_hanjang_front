// action types
export const CLICK_TO_MENU = "CLICK_TO_MENU";
export const CREENT_TAP = "CREENT_TAP";
export const SENTENCE_DATA_CLICK = "SENTENCE_DATA_CLICK";
export const PREVIOUSE_FOLDER = "PREVIOUSE_FOLDER";
// actions creator functions
export const creentTap = (idx) => {
  return {
    type: CREENT_TAP,
    playload: {
      idx,
    },
  };
};
export const sentenceDataClick = (idx) => {
  return {
    type: SENTENCE_DATA_CLICK,
    playload: {
      idx,
    },
  };
};
export const previousFolder = () => {
  return {
    type: PREVIOUSE_FOLDER,
  };
};
