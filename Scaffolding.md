My pattern for seperation of concerns:

File Structure:

- MyFeature
  - Component.js/ts
  - Style.js/ts
  - Template.js/ts
  
Code
  
```js
// Component.js/ts

import { LitElement, customElement } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("myfeature-component")
export class MyFeature extends LitElement {
  static get styles() {
    return Style
  }

  public render() {
    return Template.bind(this)();
  }
}

// Style.js/ts

import { css } from "lit-element";

export default css``;

// Template.js/ts

import { html } from "lit-element";

export default function() {
  return html``;
}
