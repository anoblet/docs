Seperation of concerns:

src
-  Feature
  -  Component.ts
  -  Style.ts
  -  Template.ts
```js
// Component.ts

import { LitElement, customElement } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("feature-component")
export class Feature extends LitElement {
  static get styles() {
    return Style
  }

  public render() {
    return Template.bind(this)();
  }
}

// Style.ts

import { css } from "lit-element";

export default css``;

// Template.ts

import { html } from "lit-element";

export default function() {
  return html``;
}
