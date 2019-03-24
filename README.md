This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### IF YOU WOULD LIKE TO JUMP TO THE LAST VERSION OF THE APP WHICH INCLUDES ALL THE FEATURES ( REDUX + RECOMPOSE ), I RECOMMEND YOU TO CHECKOUT THE `recompose` BRANCH.
#### DEMO: http://carousel-vmv.surge.sh/

## Installation

### `yarn` or `npm install`

## Branches

The `master` branch contains the carousel created in React without involving any other library. 
This branch is perfect for understanding how the carousel was built since all the logic is in one file.

Inside the `redux` branch, the internal state was moved to the redux store.

There is an additional branch (and probably the most important) called `recompose` where I replaced the classes with `recompose` related HOCS.

All the `TESTS` are located inside the `recompose` branch.

## Available Scripts

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

All the `TESTS` are located in the `recompose` branch.
Please checkout this branch before running this command.

[x] actions

[x] reducers

[x] `<App />` component - `App.test.tsx`: snapshot testing

[x] `<Carousel />` component - `Carousel.test.tsx`: snapshot testing

[x] Higher order components: `withButtonHandlers`, `withMouseHandlers`, `withSlideHandlers`, `withTouchHandlers`

### `yarn build`

Builds the app for production to the `build` folder.

[x] SSR
The HTML page is generated completely by the `react-static-generator`. The result can be seen in `build/index.html`.

## Other info

[x] installed & configured Tslint, Prettier, Editorconfig, Husky

[x] installed Redux

[x] installed StyledComponents
The style config is loaded through the ThemeProvider. The default theme configuration can be found in `src/theme.ts`

[x] the carousel supports `swiping` (pls check it on a larger screen like iPad. Didn't have time to make it responsive)

[x] the carousel supports `mouse dragging`

[x] the slides animate on change

[x] the carousel has an infinite loop
