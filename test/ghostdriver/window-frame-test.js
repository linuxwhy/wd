// Generated by CoffeeScript 1.3.3
(function() {
  var desired, remoteWdConfig, test, _ref;

  process.env.GHOSTDRIVER_TEST = 1;

  test = require('../common/window-frame-test-base').test;

  _ref = require('./config'), desired = _ref.desired, remoteWdConfig = _ref.remoteWdConfig;

  describe("wd", function() {
    return describe("ghostdriver", function() {
      return describe("window frame test", function() {
        return describe("using ghostdriver", function() {
          return test(remoteWdConfig, desired);
        });
      });
    });
  });

}).call(this);
