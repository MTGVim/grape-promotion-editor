import React, { useEffect } from "react";
import { styled } from "styled-components";
import grapesjs, { Editor } from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsBlocksBasic from "grapesjs-blocks-basic";
import gjsIndexdDB from "grapesjs-indexeddb";
import gjsExportZip from "grapesjs-plugin-export";
import gjsPromotionBlocks from "./lib/gjsPromotionBlocks";

declare global {
  interface Window {
    editor: Editor;
    isEditMode?: boolean;
  }
}

const GJS = styled.div`
  border: 0;
`;

const WebBuilderFrame = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  height: 100%;
  .gjs-editor-cont {
    overflow: auto;
  }
  .gjs-editor {
    width: 100%;
  }
  .gjs-pn-panel.gjs-pn-devices-c {
    display: none;
  }
`;

function WebBuilder() {
  useEffect(() => {
    if (grapesjs.editors[0]) {
      return;
    }
    grapesjs.init({
      storageManager: { type: "indexeddb" },
      container: GJS.toString(),
      height: "100%",
      width: "100%",
      plugins: [
        (e) => gjsPromotionBlocks(e, { blocks: ["template", "button"] }),
        (e) => gjsBlocksBasic(e, { blocks: ["image"] }),
        (e) => gjsPresetWebpage(e, { blocks: [] }),
        gjsIndexdDB,
        (e) =>
          gjsExportZip(e, {
            filenamePfx: "tiger.yoo.",
          }),
      ],
    });
  }, []);

  return (
    <>
      <WebBuilderFrame>
        <GJS />
      </WebBuilderFrame>
    </>
  );
}
export default WebBuilder;
