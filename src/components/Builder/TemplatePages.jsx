import React from "react";
import { CRUD_STATUSES } from "../../context/TemplateBuilderContext/utils/crudStatuses";
import { v4 as uuidv4 } from "uuid";
import TemplateQuestions from "./TemplateQuestions";
import { useTemplateBuilderContext } from "../../context/TemplateBuilderContext/TemplateBuilderContext";
function TemplatePages() {
  const {
    templatePages,
    updateTemplatePages,
    templateQuestions,
    updateTemplateQuestions,
  } = useTemplateBuilderContext();
  //event listeners
  const addPage = () => {
    const payload = { pageTitle: "Untitled", pageId: uuidv4() };
    updateTemplatePages(payload, CRUD_STATUSES.ADD);
  };
  const deletePage = (payload) => {
    updateTemplatePages(payload, CRUD_STATUSES.DELETE);
  };
  const updatePage = (payload) => {
    updateTemplatePages(payload, CRUD_STATUSES.EDIT);
  };
  //
  const addQuestion = (pageId) => {
    const payload = {
      pageId,
      questionId: uuidv4(),
      questionTitle: "RandomQuestion",
      typeOfResponse: "Text",
    };
    updateTemplateQuestions(payload, CRUD_STATUSES.ADD);
  };
  return (
    <div>
      {templatePages.map((t, i) => (
        <div key={t.pageId} style={{ background: "pink", margin: 10 }}>
          <>
            {i === 0 ? (
              <p>{t.pageTitle}</p>
            ) : (
              <input
                value={t.pageTitle}
                onChange={(e) =>
                  updatePage({
                    pageId: t.pageId,
                    content: e.target.value,
                    index: i,
                  })
                }
              />
            )}
            {i >= 1 && (
              <span onClick={() => deletePage({ pageId: t.pageId, index: i })}>
                Delete
              </span>
            )}
          </>
          <h5>Questions</h5>
          <TemplateQuestions pageId={t.pageId} />
          <button onClick={() => addQuestion(t.pageId)}>Add Questions.</button>
        </div>
      ))}
      <p onClick={addPage}>Add Page...</p>
    </div>
  );
}

export default TemplatePages;
