Another pattern for css custom properties.


```js
// App/Style.ts
 
Allow overrides on the global namespace for theming on the app level. 
 
export default css`
  :host { 
    --padding: 2em;
    --border: 2px dashed #CCC;
  }

Set defaults for your component/feature and allow component specific behavior.

// Card/Style.ts
import { css } from "lit-element";

export default css`
  :host { 
    --card-padding: var(--padding, 1em);
    --card-border: var(--border, 1px solid #FFF;
  }
```
