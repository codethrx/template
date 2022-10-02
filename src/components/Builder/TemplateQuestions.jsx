import React from "react";
import { CRUD_STATUSES } from "../../context/TemplateBuilderContext/utils/crudStatuses";
import { useTemplateBuilderContext } from "../../context/TemplateBuilderContext/TemplateBuilderContext";
function TemplateQuestions({ pageId }) {
  const { updateTemplateQuestions, templateQuestions } =
    useTemplateBuilderContext();
  const questions = templateQuestions.filter((q) => q.pageId === pageId);
  const { ADD, EDIT, DELETE } = CRUD_STATUSES;
  const deleteQuestion = (payload) => {
    updateTemplateQuestions(payload, DELETE);
  };
  const editQuestion = (payload) => {
    updateTemplateQuestions(payload, EDIT);
  };
  return (
    <div>
      <div>
        {questions.map((question, index) => (
          <div key={question.questionId}>
            {/* <p>{question.questionTitle}</p> */}
            <input
              value={question.questionTitle}
              onChange={({ target }) => {
                editQuestion({
                  content: target.value,
                  questionId: question.questionId,
                });
              }}
            />
            <span onClick={() => deleteQuestion(question.questionId)}>
              Delete
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateQuestions;
