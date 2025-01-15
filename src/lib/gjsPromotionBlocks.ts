import { Editor } from 'grapesjs';

interface IButtonScriptProps {
  id: string;
  linkUrl: string;
  designHeight: number;
  designWidth: number;
  designTop: number;
  designLeft: number;
  linkready: "true" | "false";
}

type BlockType = "image" | "button" | "template";
export default function gjsPromotionBlocks(
  editor: Editor,
  options?: { blocks?: BlockType[] }
) {
  const resizeHandlerCleanups = new Map<string, () => void>();

  function buttonScript(  this: HTMLElement,  props : IButtonScriptProps  ) {
    const {
      linkUrl,
      designHeight,
      designWidth,
      designTop,
      designLeft,
      linkready,
    } = props;

    console.log(props);
  
    const hsp = (e: number) => (
      `calc(${visualViewport?.width? `${visualViewport?.width}px` : "100vw"} / 375 * ${e})`
    );

    console.log(this.id);
    
    const el = this;
    const updateStyle = () => {
      el.style.top = hsp(designTop);
      el.style.left = hsp(designLeft);
      el.style.height = hsp(designHeight);
      el.style.width = hsp(designWidth);
      el.style.background = !linkready ? "rgba(255,0,255,0.5)" : "transparent";
    };
    el.onclick = !linkready ? () => undefined : () => window.open(linkUrl);

    /** TODO: remove하고 중복제거 가능해야 함 */
    window.addEventListener("resize", updateStyle);
  
    updateStyle();
  }

  editor.Components.addType("image", {
    model: {
      defaults: {
        tagName: "img",
        style: { width: "100%", "object-fit": "contain" },
      },
    },
  });
  editor.Components.addType("div", {
    model: {
      defaults: {
        tagName: "div",
        style: {
          width: "100%",
          display: "flex",
          "flex-direction": "column",
          position: "absolute",
        },
      },
    },
  });
  editor.Components.addType("button", {
    model: {
      draggable: "body",
      defaults: {
        style: {
          position: "absolute",
          margin: "0",
          "z-index": "1",
          background: "rgba(255,0,255,0.5)",
          outline: "0",
          border: "0",
          cursor: "pointer",
        },
        script: buttonScript,
        linkUrl: "",
        designHeight: 20,
        designWidth: 200,
        designTop: 20,
        designLeft: Math.floor((375 - 200) / 2),
        tagName: "button",
        components: [""],
        traits: [
          "id",
          {
            type: "number",
            name: "designTop",
            label: "top",
            changeProp: true,
          },
          {
            type: "number",
            name: "designLeft",
            label: "left",
            changeProp: true,
          },
          {
            type: "number",
            name: "designWidth",
            label: "width",
            changeProp: true,
          },
          {
            type: "number",
            name: "designHeight",
            label: "height",
            changeProp: true,
          },
          {
            type: "text",
            name: "linkUrl",
            label: "link",
            changeProp: true,
            placeholder: "insert link url",
          },
          {
            type: "checkbox",
            label: "link\nready",
            name: "linkready",
            default: "false",
            changeProp: true,
          },
        ],
        "script-props": [
          "id",
          "linkUrl",
          "designHeight",
          "designWidth",
          "designTop",
          "designLeft",
          "linkready",
        ],
      },
      init() {
        this.on("change:attributes:id", this.handleIdChange);
      },
      removed() {
        console.log("Button removed", this.getAttributes());
        resizeHandlerCleanups.get(this.getAttributes().id)?.();
      },
      handleIdChange() {
        console.log("Attribute id updated: ", this.getAttributes().id);
      },
    },
  });

  options?.blocks?.forEach((blockType) => {
    if (blockType === "image") {
      editor.BlockManager.add("promotionImg", {
        label: "Image",
        category: "Promotion",
        content: {
          type: "image",
          style: { width: "100%", "object-fit": "contain", display: "block" },
        },
      });
    } else if (blockType === "button") {
      editor.BlockManager.add("promotionButton", {
        label: "Button",
        category: "Promotion",
        content: {
          type: "button",
        },
      });
    } else if (blockType === "template") {
      editor.BlockManager.add("promotionTemplate", {
        label: "Template",
        category: "Promotion",
        content: {
          type: "div",
          style: {
            width: "100%",
          },
          components: [
            {
              type: "image",
              style: {
                width: "100%",
                "object-fit": "contain",
                display: "block",
              },
            },
            {
              type: "button",
            },
          ],
        },
      });
    }
  });
}
