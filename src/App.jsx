import { useState } from "react";
import "./App.css";
//Builder
import Builder from "./components/Builder";
import { useTemplateBuilderContext } from "./context/TemplateBuilderContext/TemplateBuilderContext";
function App() {
  const { templatePages, templateIntro, templateQuestions } =
    useTemplateBuilderContext();
  //testing
  const checkMate = () => {
    // console.log(templateIntro);
    // console.log(templatePages);
    // console.log(templateQuestions);
  };
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Builder />

      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={checkMate}
      >
        Check....
      </button>
    </div>
  );
}

export default App;
