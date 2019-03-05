# The last mile -- achieving better a perfomance score and reducing your byte-to-carbon emissions

## Large impact

### Webpack
#### Chunking
 - Statically import your app shell resources/components
 - If a resource only provides side-effects(component registration) import it dynamically unless needed on first-render
 - Chunk large libs like Firebase
 - It's possible to chunk two dynamic imports together by providing the same `/* webpackChunkName */`

## Average impact

### Preconnect
Preconnect to external resources

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://www.google-analytics.com/" />
<link rel="preconnect" href="https://firestore.googleapis.com" />
```

### Preload fonts
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

### DNS prefetch
I have yet to see any perfomance benefit from this

```
<link rel="dns-prefetch" href="https://www.googleapis.com" />
```

### Prefetch
Prefetched resources from the main bundle will decrease your scores.

## Small impact

### Styles
 - Define your shell styles in index.html to avoid additional network requests
 - Set your background color/image in index.html so that a refresh does not flash white

 
### Favicon
Here's an example of a blank favicon converted to base64 to get rid of a netowrk request

```
<link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
```



