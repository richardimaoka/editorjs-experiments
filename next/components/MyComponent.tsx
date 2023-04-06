import EditorJS from "@editorjs/editorjs";
import { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    console.log("===============================");
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: "editorjs",
    });
  });
  return <></>;
};

export default MyComponent;
