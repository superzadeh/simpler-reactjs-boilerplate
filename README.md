# Simpler React Boilerplate

## Motivation

Even though [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) is a great project, I feel that some features included are a bit overkill for small/medium sized front-end teams. This project provides a react boilerplate with a leaner structure (all `components/containers/reducers/actions/sagas` in their respective folders), without using [immutableJS](https://facebook.github.io/immutable-js/) (the object spread is enough) and integrates [Sass](http://sass-lang.com/) for happy designers (`less` integration is more or less the same). 

For instructions/how-to, refer to the [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) project.

## Never used [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate), what's included?

- i18n using [react-intl](https://github.com/yahoo/react-intl). Works very well with [lingohub](https://lingohub.com/) and other 3rd party translation tools
- [Redux](http://redux.js.org/) for state management
- [Redux Sagas](https://github.com/redux-saga/redux-saga) to manage async workflows and `workers` (aka background jobs, such as listenning to a socket)
- [Sass](http://sass-lang.com/)
- [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) for testing and coverage (configuration is in `package.json`). 
- [ESlint](http://eslint.org/) (configuration is in `package.json`)
- [BabelJS](https://babeljs.io/) (configuration is in `package.json`)
- Use [Yarn](https://yarnpkg.com/lang/en) or [NPM](https://github.com/npm/npm)
- [Webpack](https://webpack.js.org/) with HMR (Hot Module Reload) enabled
- Build for production, run `yarn build` and host the content of the `build` folder in a static server.
- SSR is also supported, see the [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) for more info

## Setting up

```bash
npm install -g yarn
yarn install
```

## Development

```bash
yarn start
```

## Testing

```bash
yarn test
# or
yarn test:watch
# To update snapshots
yarn test -- -u
```

## Build

```bash
# Outputs to the /build folder
yarn build
```

## What changed from the ReactJS Boilerplate

- Removed ImmutableJS
- Changed File structure
- Support Sass
- Leaner template website
- i18n present but not used by default (use `messages` from `react-intl`)

## TODO (PRs are welcome)

- [ ] Update `internal/generators`
- [ ] More cleanup in `internal`
- [ ] Dockerize
- [ ] Update dependencies
- [ ] Enable Snyk monitoring
- [ ] Add docs for file structure/naming conventions
