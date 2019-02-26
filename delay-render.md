### How to delay rendering untill actions are taken

```js
class MyClass extends LitElement() {
  beforeRenderComplete = false;

  constructor() {
    super();
    this.beforeRender();
  }

  async beforeRender() {
    await setTimeout(this.style.setProperty("background", "red"), 250);
    await setTimeout(this.style.setProperty("color", "blue"), 250);
    this.beforeRenderComplete = true;
    this.requestUpdate():
  }

  shouldUpdate() {
    return this.beforeRenderComplete ? super.shouldUpdate() : false;
  }
}
```
