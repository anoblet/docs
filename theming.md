# Theming in lit-element

Theming in lit-element relies on custom properties in css:

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

Bear in mind, nothing has actually happened yet. We have declared a variable, but we have not used it. In order to use the custom property, we would need to do this:

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

To programtically update the value of a property we can use:
```
this.style.setProperty("--background-color", "red")
```

Custom properties permeate shadow boundaries, so no matter how many custom components you have, they will be able to reference this property.

## Patterns

Loop an array of objects and set custom property
: 
```
const theme = [
    {
      property: "--background-color",
      value: "red"
    },
    {
      property: "--text-color",
      value: "red"
    } 
]
```
```
const setTheme = (theme) => theme.map(propertyMap => {
    this.style.setProperty(propertyMap.property, propertyMap.value);
});
```

Combined with:

```
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
This could come from redux, firebase, or a static value
```
<button @click=${setTheme(theme}>Set theme</button>
```

Will set your colors to that of the English flag :)

You can see it in action here: https://codesandbox.io/s/62j7nkzx03
