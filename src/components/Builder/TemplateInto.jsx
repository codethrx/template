import React from "react";
import { useTemplateBuilderContext } from "../../context/TemplateBuilderContext/TemplateBuilderContext";
function TemplateIntro() {
  const { updateTemplateIntro, templateIntro } = useTemplateBuilderContext();
  const { tempTitle, tempDesc, tempImgUrl } = templateIntro;
  //using the context
  return (
    <div>
      <input
        type="text"
        value={tempTitle}
        id="tempTitle"
        onChange={(e) => {
          updateTemplateIntro({ [e.target.id]: e.target.value });
        }}
      />
      <input
        type="text"
        value={tempDesc}
        id="tempDesc"
        onChange={(e) => {
          updateTemplateIntro({ [e.target.id]: e.target.value });
        }}
      />
      <input
        type="text"
        value={tempImgUrl}
        id="tempImgUrl"
        onChange={(e) => {
          updateTemplateIntro({ [e.target.id]: e.target.value });
        }}
      />
    </div>
  );
}

export default TemplateIntro;
