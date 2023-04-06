import EditorJS from "@editorjs/editorjs";
import { useEffect } from "react";

export const MyComponent = () => {
  useEffect(() => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: "editorjs",
    });
  });
  return <></>;
};
