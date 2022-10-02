import { createContext, useContext, useState } from "react";
//other packages
import { v4 as uuidv4 } from "uuid";
import { CRUD_STATUSES } from "./utils/crudStatuses";
//Creation....
const TemplateBuilderContext = createContext();

//Provider...
export const TemplateBuilderContextProvider = ({ children }) => {
  //States...
  const [templateIntro, setTemplateIntro] = useState({
    tempTitle: "Title",
    tempDesc: "Description",
    tempImgUrl: "ABC",
  });
  const [templatePages, setTemplatePages] = useState([
    { pageTitle: "Title Page", pageId: uuidv4() },
  ]);
  const [templateQuestions, setTemplateQuestions] = useState([
    {
      pageId: uuidv4(),
      questionId: uuidv4(),
      questionTitle: "RandomQ",
      typeOfResponse: "Text",
    },
  ]);
  // console.log(templateIntro);

  //supporting functions..
  const updateTemplateIntro = (payload) => {
    setTemplateIntro({ ...templateIntro, ...payload });
  };
  const updateTemplatePages = (payload = null, status) => {
    if (status === CRUD_STATUSES.ADD) {
      setTemplatePages([...templatePages, payload]);
      return;
    }
    if (status === CRUD_STATUSES.EDIT) {
      setTemplatePages(
        templatePages.map((page) =>
          page.pageId === payload.pageId
            ? { ...page, pageTitle: payload.content }
            : { ...page }
        )
      );
    }
    if (status === CRUD_STATUSES.DELETE) {
      // console.log("Clicked");
      if (payload.index === 0) return;
      setTemplatePages(
        templatePages.filter((temp) => temp.pageId !== payload.pageId)
      );
      return;
    }
  };
  const updateTemplateQuestions = (payload = null, status) => {
    if (status === CRUD_STATUSES.ADD) {
      setTemplateQuestions([...templateQuestions, payload]);
      return;
    }
    if (status === CRUD_STATUSES.DELETE) {
      setTemplateQuestions(
        templateQuestions.filter((ques) => ques.questionId !== payload)
      );
      return;
    }
    if (status === CRUD_STATUSES.EDIT) {
      setTemplateQuestions(
        templateQuestions.map((q) =>
          q.questionId === payload.questionId
            ? { ...q, questionTitle: payload.content }
            : { ...q }
        )
      );
      console.log(payload);
    }
  };
  return (
    <TemplateBuilderContext.Provider
      value={{
        //intro
        templateIntro,
        updateTemplateIntro,
        //pages.
        templatePages,
        updateTemplatePages,
        //questions
        templateQuestions,
        updateTemplateQuestions,
      }}
    >
      {children}
    </TemplateBuilderContext.Provider>
  );
};
//Consumption...
export const useTemplateBuilderContext = () =>
  useContext(TemplateBuilderContext);
