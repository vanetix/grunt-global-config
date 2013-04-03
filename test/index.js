var grunt = require('grunt');

exports.config = {
  cases: function(test) {
    var expect, result;
    
    test.expect(1);


    expect = grunt.file.read("test/expected/simple.js");
    result = grunt.file.read("tmp/simple.js");
    test.equal(expect, result, "should turn json to a global object");

    test.done();
  }
};
