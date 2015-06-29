/*
 * thehub-deploy
 * https://github.com/cyb-ashishku/thehub-deploy
 *
 * Copyright (c) 2015 Ashish Kumar
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');
var _ = require('lodash');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('deploy', 'Copy dependent folders (using contrib-copy) and then build them.', function () {
    var config = {
      copy: {}
    };
    var copyTask = 'copy_deplyoment_' + this.target;
    var copyFiles = [];

    _.each(this.data.files, function (file) {
      file.dest = 'deploy/<%= pkg.name %>';
      copyFiles.push(file);
    });

    config.copy[copyTask] = {
      files: copyFiles
    };

    grunt.log.writeln('Updated copy config');
    grunt.verbose.writeln(JSON.stringify(config, 2, 2));
    grunt.config.merge(config);

    grunt.task.run('copy:' + copyTask);
  });
};
