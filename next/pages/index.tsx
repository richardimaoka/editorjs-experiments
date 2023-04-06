import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useState } from "react";

const EditorBlock = dynamic(() => import("../components/Editor"), {
  ssr: false,
});

export default function Home() {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState<OutputData>();
  return (
    <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
  );
}
