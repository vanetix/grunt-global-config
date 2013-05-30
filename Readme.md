# grunt-global-config [![Build Status](https://travis-ci.org/vanetix/grunt-global-config.png?branch=master)](https://travis-ci.org/vanetix/grunt-global-config)
***Requires grunt >= 0.4.0***

Build a global configuration object from json files.

## Getting Started
Install this grunt plugin next to your project's *Gruntfile.js* with:
```shell
npm install grunt-global-config --save-dev
```

Then add this line to your project's `Gruntfile.js`:

```javascript
grunt.loadNpmTasks('grunt-global-config');
```

## Options

#### debug
Type: `string`
Default: `window.Config`

Sets the global namespace for the configuration object.

## Usage

*Simple*
```javascript
config: {
  files: {
    src: 'path/to/config',
    dest: 'configuration.js'
  }
}
```
Note: You can also use templates in your config.json, i.e. `"version": "<%= pkg.version %>`.

## Release History
- 0.1.0 - Ability to use grunt templates. Thanks [ataube](http://www.github.com/ataube)!
- 0.0.1 - Initial release

## License (MIT)
Copyright (c) 2013 Matt McFarland  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
