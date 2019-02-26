### How to delay rendering until a promise is resolved (https://codesandbox.io/s/jj7z294vv5)

```jsimport { LitElement, html } from "lit-element";

class MyElement extends LitElement {
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
    this.beforeRender().then(() => (this.beforeRenderComplete = true));
  }

  async beforeRender() {
    await new Promise(function(resolve) {
      setTimeout(() => resolve(), 2000);
    });
  }

  shouldUpdate() {
    return this.beforeRenderComplete && super.shouldUpdate();
  }

  render() {
    return html`
      Hi!
    `;
  }
}
window.customElements.define("my-element", MyElement);
```
