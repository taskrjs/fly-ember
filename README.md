<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [Ember](http://emberjs.com/) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](http://emberjs.com/blog/2015/02/05/compiling-templates-in-1-10-0.html) to see the available options.

### Install

```a
npm install -D fly-ember
```

### Example

```js
export default function* () {
  yield this
    .source("app/templates/*.hbs")
    .ember()
    .babel({ modules: "amd" })
    .concat("app.js")
    .target("dist/assets")
}
```

## Disclaimer

This program is free software and it comes without any warranty, to the extent permitted by applicable law. `fly-ember` is not associated with the [Ember.js](https://github.com/emberjs) or  [ember-cli](https://github.com/ember-cli) organizations.

## License

[MIT][mit] © [Jorge Bucaran][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/bucaran
[contributors]: https://github.com/bucaran/fly-ember/graphs/contributors
[releases]:     https://github.com/bucaran/fly-ember/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-ember
[npm-ver-link]: https://img.shields.io/npm/v/fly-ember.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-ember.svg?style=flat-square
[travis-link]:  https://travis-ci.org/bucaran/fly-ember
[travis-badge]: http://img.shields.io/travis/bucaran/fly-ember.svg?style=flat-square
