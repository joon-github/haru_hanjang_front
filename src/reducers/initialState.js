import writingIcon from "../icons/writing.png";
import wordIcon from "../icons/word.png";
import gameIcon from "../icons/console.png";
import settingIcon from "../icons/setting.png";

export const initialState = {
  isMain: true,
  creentTap: [0],
  folderTitle: [],
  data: [
    {
      id: 1,
      name: "내 문장",
      icon: writingIcon,
      url: "/my_sentence",
    },
    {
      id: 2,
      name: "내 단어",
      icon: wordIcon,
      url: "/my_word",
    },
    {
      id: 3,
      name: "게임",
      icon: gameIcon,
      url: "/game",
    },
    {
      id: 4,
      name: "설정",
      icon: settingIcon,
      url: "/setting",
    },
  ],

  sentenceData: [
    {
      id: 1,
      title: "짧은 문장 모음",
      type: "folder",
      sentenceData: [
        {
          id: 1,
          title: "짧은 문장 1",
          type: "document",
          content: "Download the Readt DevTools for a better",
          sentenceData: null,
        },
        {
          id: 2,
          title: "하위폴더",
          type: "folder",
          sentenceData: [
            {
              id: 1,
              title: "하위폴더2",
              type: "folder",
              sentenceData: [
                {
                  id: 1,
                  title: "짧은 문장 ssss",
                  type: "document",
                  content: "Download the Readt DevTools for a better",
                  sentenceData: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "긴 문장 모음",
      type: "folder",
      sentenceData: [
        {
          id: 1,
          title: "긴 문장 1",
          type: "document",
          content:
            "All samples shall be properly labeled in order to ensure that the results can be traced back to the location from which it was collected.All samples shall be properly labeled in order to ensure that the results can be traced back to the location from which it was collected.",
          sentenceData: null,
        },
      ],
    },
  ],
};
