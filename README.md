# gitkit-widgets

[![Travis Build Status](https://img.shields.io/travis/iceddev/gitkit-widgets/master.svg?label=travis&style=flat-square)](https://travis-ci.org/iceddev/gitkit-widgets)

Convenience library for initializing Google Identity Toolkit widgets

## Usage

```js
var gitkit = require('gitkit-widgets');

var config = {
  signinUrl: '/login',
  signoutUrl: '/',
  popup: true
};

gitkit.signin('#loginButton', config, function(err){
  // button is ready
});
```

## API

### `signin(selector, options, [callback])`

Attach a signin widget, configured by `options`, to all elements that match the `selector`.

#### `selector`

Any valid selector to pass to `document.querySelectorAll`.

#### `options`

Configuration for the signin button. Takes any of the [Gitkit widget options](https://developers.google.com/identity/toolkit/web/setup-frontend#page_with_sign_in_button) or nicer options as defined below.

__Note: all Gitkit widget option names take precedence over the names below.__

##### `options.siginUrl` (default: '/signin')

The location a user is redirected to during login. The location must contain a login widget.

##### `options.signoutUrl` (default: '/')

The location a user is redirected to during logout.

##### `options.popup` (default: false)

Whether the login page should show in a popup or not.

##### `options.forceSignin` (default: false)

Whether a user is forced to login immediately.

##### `options.cookie` (default: 'gtoken')

The cookie where a user's login token is saved.

#### `callback`

Optional callback that is invoked upon completion of signin button construction.

## License

MIT
