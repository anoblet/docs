File Structure:

- MyFeature
  - Component.ts
  - Style.ts
  - Template.ts

Code:

```js
// Component.ts

import { LitElement, customElement } from "lit-element";

import style from "./Style";
import template from "./Template";

@customElement("myfeature-component")
export class MyFeature extends LitElement {
  public static styles = style;
  public render = template.bind(this);
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
