File Structure:

- MyFeature
  - Component.ts
  - Style.ts
  - Template.ts
  
Code:
  
```js
// Component.ts

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

// Style.ts

import { css } from "lit-element";

export default css``;

// Template.ts

import { html } from "lit-element";

export default function() {
  return html``;
}
```
