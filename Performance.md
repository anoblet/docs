## Preconnect

```
  <link rel="preconnect" href="https://fonts.googleapis.com" />
```

## Preload fonts
You'll want to host your fonts locally, so they can be cached. Then you want to preload them like this:

```
  <link
    rel="preload"
    href="/font/MaterialIcons-Regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
```

## Chunking
 - Import statically your app shell components
 - Chunk large libs like Firebase
 
## Favicon

```
<link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
```

