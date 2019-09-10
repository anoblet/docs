/**
 * Takes a node, CSSResult and appends it
 */
export const applyStyle = (node: LitElement, style: CSSResult) => {
  if ("adoptedStyleSheets" in document) {
    const sheets = node.shadowRoot.adoptedStyleSheets;
    node.shadowRoot.adoptedStyleSheets = [...sheets, style._styleSheet];
  } else {
    const styleNode = document.createElement("style");
    styleNode.textContent = style.cssText;
    node.shadowRoot.appendChild(styleNode);
  }
};
