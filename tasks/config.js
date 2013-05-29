/*
 * grunt-global-config
 * https://github.com/vanetix/grunt-global-config
 *
 * Copyright (c) 2013 Matt McFarland
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  /**
   * Core `grunt-global-config` task
   */

  grunt.registerMultiTask('config', 'Create a global config from json.', function() {

    /**
     * Default options
     */

    var opts = this.options({
      namespace: 'window.Config'
    });

    this.files.forEach(function(f) {
      var c = '';

      f.src
        .filter(function(p) {
          if(grunt.file.exists(p)) {
            return true;
          } else {
            grunt.log.warn('Source file "' + p + '" not found.');
            return false;
          }
        })
        .forEach(function(p) {
          var f = grunt.file.read(p);
          var j = JSON.parse(grunt.config.process(f));

          c += opts.namespace + ' = ' + JSON.stringify(j) + ';' + grunt.util.linefeed;
        });

      grunt.file.write(f.dest, c);
      grunt.log.ok(f.dest);
    });
  });
};
