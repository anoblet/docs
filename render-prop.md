# Render prop (https://codesandbox.io/s/71ox7pr391)

render is an overridable method on the LitElement class
We can declaritively override a components template with the ```<my-element .render=${() => html`Overriding template`}></my-element>``` syntax.

```js
import { LitElement, css, html } from "lit-element";
import "./child-element";

const arrowFunc = () =>
  html`
    Render funk!
  `;

// this will always be undefined
const arrowFuncBinded = () =>
  html`
    Render funk! ${this.count}
  `;

const realFunc = function() {
  return html`
    Render funk! Count: ${this.count}
  `;
};

class Element extends LitElement {
  static get properties() {
    return {
      count: {
        type: Number
      }
    };
  }

  static get styles() {
    return css`
      child-element {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <child-element .render="${arrowFunc}"></child-element>
      <child-element .render="${realFunc}"></child-element>
      <child-element .render="${realFunc.bind(this)}"></child-element>
    `;
  }
}
window.customElements.define("my-element", Element);
```
