Pattern for css custom properties.

Allow overrides on the global namespace for theming on the app level. 
```js
// App/Style.ts
import { css } from "lit-element";

export default css`
  :host { 
    --padding: 2em;
    --border: 2px dashed #CCC;
    // --card-padding: 0;
    // --card-border 7px solid #eee;
  }
```
Set defaults for your component/feature and allow component specific behavior.

```js
// Card/Style.ts
import { css } from "lit-element";

export default css`
  :host { 
    --card-padding: var(--padding, 1em);
    --card-border: var(--border, 1px solid #FFF;
  }
```
