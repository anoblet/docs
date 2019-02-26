### How to delay rendering untill actions are taken

```
class MyClass extends LitElement() {
  taskpending = true;

  constructor() {
    super();
    this.beforeRender();
  }

  async beforeRender() {
    await setTimeout(this.style.setProperty("background", "red");
    this.taskPending = false;
    this.requestUpdate():
  }

  shouldUpdate() {
    return this.taskPending ? false : super.shouldUpdate();
  }
}
```
