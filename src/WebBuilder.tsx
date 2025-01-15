import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs/dist/grapes.min.js';

import { useEffect } from 'react';

import grapesjs, { Editor } from 'grapesjs';
import gjsBlocksBasic from 'grapesjs-blocks-basic';
import gjsIndexdDB from 'grapesjs-indexeddb';
import gjsExportZip from 'grapesjs-plugin-export';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import { styled } from 'styled-components';

import gjsPromotionBlocks from './lib/gjsPromotionBlocks';

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
    const editor = grapesjs.init({
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
    
    /** attribute 변경점은 scaling 처리랑 엮여있어 component단에서 처리하므로, style manager 패널은 숨김 */
    const panelManager = editor.Panels;
    panelManager.removeButton('views', 'open-sm');
      
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
