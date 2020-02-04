import React, { useState } from "react";
import { ko } from "./GlobalLang/korean";
import { en } from "./GlobalLang/english";
import { LangContext } from "./Context";

const LangProvider = ({ children }) => {
  const [korean, setKorean] = useState(true);
  const [lang, setLang] = useState({});
  const languageSetting = () => {
    if (korean) {
      setLang(ko);
    } else {
      setLang(en);
    }
  };

  const handleKor = e => {
    if (korean) {
      e.preventDefault();
    } else {
      setKorean(true);
    }
    console.log("handleKor");
  };
  const handleEng = e => {
    if (!korean) {
      e.preventDefault();
    } else {
      setKorean(false);
    }
    console.log("handleEng");
  };
  const provider = {
    languageSetting,
    handleKor,
    handleEng,
    lang,
    korean
  };
  return (
    <LangContext.Provider value={provider}>{children}</LangContext.Provider>
  );
};

export default LangProvider;
