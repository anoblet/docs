# Theming in lit-element

Theming in lit-element relies on custom properties in css:

Custom properties can be defined as follows:

```css
:host {
  --prop: value
}
```

An example of this would be:

```css
:host {
  --background-color: #DDDDDD
}
```
Bear in mind, nothing has actually happened yet. We have declared a variable, but we have not used it. In order to use the custom property, you would need to do this:

```css
  .myChildElement {
    background: var(--background-color);
  }
```

Custom properties permeate shadow boundaries, so no matter how many custom components you have, they will be able to use this property.

Now for the fun stuff:

Let's say we want a dark theme toggle switch:

```js
class MyParent extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          background: var(--background-color);
          color: var(--text-color);
        }
      `
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("update-theme", e => {
      const theme = e.detail;
      theme.map(property => {
        this.style.setProperty(property.property, property.value);
      });
    });
  }

  render() {
    return html`
      <my-child></my-child>
    `;
  }
}

class MyChild extends LitElement {
  theme = "light";

  render() {
    const dark = [
      { property: "--background-color", value: "black" },
      { property: "--text-color", value: "white" }
    ];
    const light = [
      { property: "--background-color", value: "white" },
      { property: "--text-color", value: "black" }
    ];
    return html`
      <button
        @click="${
          () => {
            const theme = this.theme === "light" ? dark : light;
            this.dispatchEvent(
              new CustomEvent("update-theme", {
                bubbles: true,
                composed: true,
                detail: theme
              })
            );
            this.theme = this.theme === "light" ? "dark" : "light";
          }
        }"
      >
        Toggle
      </button>
      This is text in a child
    `;
  }
}
```
You can see it in action here: https://codesandbox.io/s/62j7nkzx03
