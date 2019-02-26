### Delay render until promise is resolved - show loading text (https://codesandbox.io/s/1wnq5woqz4)

```js
import { LitElement, css, customElement, html } from "lit-element";

class Element extends LitElement {
  static get properties() {
    return {
      beforeRenderComplete: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.beforeRenderComplete = false;
    this.beforeRender();
  }

  async beforeRender() {
    await new Promise(function(resolve) {
      setTimeout(() => resolve(), 2000);
    });
    this.beforeRenderComplete = true;
  }

  render() {
    return this.beforeRenderComplete
      ? html`
          Loaded
        `
      : html`
          Loading...
        `;
  }
}
window.customElements.define("my-element", Element);
```
