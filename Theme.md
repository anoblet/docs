# Theming in lit-html

## Let's define out objectives
 * What is lit-html?
 * How do we define a theme?     

Theming in lit relies sometimes (a lot) on custom properties in css:

Custom properties can be defined as follows:

```css
:host {
  --my-property: value
}
```

An example of this would be:

```css
:host {
  --background-color: #DDDDDD
}
```

Bear in mind, nothing has actually happened yet. We have declared a variable, but we have not used it. In order to use the custom property, we would need reference it:

```css
  .myChildElement {
    background: var(--background-color);
  }
```

We can also set a fallback value

```css
  .myChildElement {
    background: var(--background-color, "blue");
  }
```

To programmatically update the value of an element's property we can use:
```
this.style.setProperty("--background-color", "red")
```

Custom properties must always be values, they are inherited by a host's children and are a technique to permeate shadow boundaries.

## Patterns
Assume our style definition is as follows:
```
  :host {
    background-color: var(--background-color, #fff);
    text-color: var(--text-color, #000);
  }
```

Loop an array of objects and set custom property:
```
// This could be defined anywhere (Firebase, a form etc...)

const theme = [
    {
      property: "--background-color",
      value: "white"
    },
    {
      property: "--text-color",
      value: "red"
    } 
]
```
Class
```
setTheme(theme) { 
  theme.map(propertyMap =>
    this.style.setProperty(propertyMap.property, propertyMap.value)
};
```
```
<button @click=${this.setTheme(theme}>Set theme</button>
```
Pure
```
const setTheme = (theme, element) => theme.map(propertyMap => {
    element.style.setProperty(propertyMap.property, propertyMap.value);
});
```
```
<button @click=${setTheme(theme, this}>Set theme</button>
```

Either of those examples will set your colors to that of the English flag :)

You can see it in action here: https://codesandbox.io/s/62j7nkzx03 (may not be updated)
