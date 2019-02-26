### How to delay rendering untill actions are taken

```js
class MyClass extends LitElement() {
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
    this.requestUpdate();
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
