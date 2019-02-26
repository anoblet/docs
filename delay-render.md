### How to delay rendering until actions are taken
 - https://codesandbox.io/s/jj7z294vv5

```js
class MyClass extends LitElement() {
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
  }

  connectedCallback() {
    super.connectedCallback();
    this.beforeRender();
  }

  async beforeRender() {
    await new Promise(function(resolve) {
      setTimeout(() => resolve(), 2000);
    });
    this.beforeRenderComplete = true;
  }

  shouldUpdate() {
    return this.beforeRenderComplete ? super.shouldUpdate() : false;
  }

  render() {
    return html`
      Hi!
    `;
  }
}
```
