# Rocky going through DiscoverThreeJS


## The book
https://discoverthreejs.com/book/first-steps/app-structure/

## File structure

Major projects are broken into folders.

One offs should be single html files.



## Webpack
GIt cloned from https://github.com/designcourse/threejs-webpack-starter
Courtesy of Bruno Simon of https://threejs-journey.xyz/

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Testing the current pages

1. npm run dev

2. visit pages

3. Open up devtools to see the console.logs!

* `src/index.html`: http://localhost:8080/

* `src/test/index.html`: http://localhost:8080/test

* `src/another-test/index.html`: http://localhost:8080/another-test

* `src/example1.html`: http://localhost:8080/example1.html

* `src/example2.html`: http://localhost:8080/example2.html



## Adding new pages

1. Open up `bundler/webpack.common.js`
2. Add html pages to `htmlPageNames`
3. Add their JS file to the 'entry' bit in `module.exports`


Example:
```js
let htmlPageNames = ['new-html-page'];

...
module.exports = {
    entry: { 
        "new-html-page": path.resolve(__dirname, '../src/script.js'), 
        ...
    },
```


## Extra notes
### GitPages?
If you're deploying this on GitPages, then commit the `dist` folder along with it. It's currently being `.gitignore`.

### Performance?
WARNING in webpack performance recommendations.


