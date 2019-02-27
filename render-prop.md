# Render prop (https://codesandbox.io/s/71ox7pr391)

render is an overridable method on the LitElement class
We can declaritively override a components template with the ```<my-element .render=${() => html`Overriding template`}></my-element>``` syntax.
