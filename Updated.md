Updated provides a weak map of previous propertiess. You access new values using `this`.

```
updated(changedPropertes) {
  const oldProp = changedProperties.get("prop") // if the property has changed get the old value
  const newProp = this.prop; // new value
}
```
