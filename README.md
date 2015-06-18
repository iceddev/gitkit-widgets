# gitkit-widgets

[![Travis Build Status](https://img.shields.io/travis/iceddev/gitkit-widgets/master.svg?label=travis&style=flat-square)](https://travis-ci.org/iceddev/gitkit-widgets)

Convenience library for initializing Google Identity Toolkit widgets

## Usage

```js
var gitkit = require('gitkit-widgets');

var config = {
  loginUrl: '/login',
  logoutUrl: '/',
  popup: true
};

gitkit.login('#loginButton', config, function(err){
  // button is ready
});
```

## API

### `login(selector, [options], [callback])`

Attach a login widget, configured by `options`, to all elements that match the `selector`.

#### `selector`

Any valid selector to pass to `document.querySelectorAll`.

#### `options`

Optional configuration for the login button. Takes any of the [Gitkit widget options](https://developers.google.com/identity/toolkit/web/setup-frontend#page_with_sign_in_button) or nicer options as defined below.

__Note: all Gitkit widget option names take precedence over the names below.__

##### `options.loginUrl` (default: '/login')

The location a user is redirected to during login. The location must contain a login widget.

##### `options.logoutUrl` (default: '/')

The location a user is redirected to during logout.

##### `options.popup` (default: false)

Whether the login page should show in a popup or not.

##### `options.cookie` (default: 'gtoken')

The cookie where a user's login token is saved.

#### `callback`

Optional callback that is invoked upon completion of login button construction.

## License

MIT
