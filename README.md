# Base skeleton for TS app with webpack

A very basic skeleton for a TypeScript app using webpack

## Install dependencies

```sh 
npm install
```
## Build

Webpack takes all files from `src/` and bundles them in `dist/`.

### Watch for changes and rebuild automatically

```sh
npm run watch
```

### Create development builds

```sh
npm run dev
```

### Create production builds

```sh
npm run build
```

## Additional info

### Include static images in HTML

You can link any image in the `src/` directory in your HTML files with the following syntax:

```
<%require('./path/to/file.ext')%>
```

For example, assuming you have an image whose path is `src/img/image.png`, you can include it in your `index.html` as follows:

```html
<img src="<%=require('./img/image.png')%>" alt="My image">
```

The image will be copied into the `dist/` folder at build time.
