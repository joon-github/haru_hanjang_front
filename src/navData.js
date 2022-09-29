import writingIcon from "./icons/writing.png";
import wordIcon from "./icons/word.png";
import gameIcon from "./icons/console.png";
import settingIcon from "./icons/setting.png";

const navData = [
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
];

export default navData;
