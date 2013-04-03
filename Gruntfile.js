module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/config.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    nodeunit: {
      tests: ['test/index.js']
    },

    // Remove test staging directory
    clean: {
      tmp: ['tmp']
    },

    // Build the test cases
    config: {
      basic: {
        options: {
          namespace: 'Simple'
        },
        src: 'test/cases/simple.json',
        dest: 'tmp/simple.js'
      },
    }
  });

  // Load this task
  grunt.loadTasks('tasks');
  
  // Load plugins used by this task gruntfile
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Test task cleans `tmp` and builds includes, then runs tests
  grunt.registerTask('test', ['clean', 'config', 'nodeunit']);

  // Default task
  grunt.registerTask('default', ['jshint', 'test']);
};
