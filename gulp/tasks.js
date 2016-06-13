module.exports = (function () {
    'use strict';

    var gulp = require('gulp');
    var runSequence = require('run-sequence');
    var del = require('del');

    return {
        default: defaultTask,
        build: build,
        clean: {
            all: cleanAll
        }
    };

    function defaultTask (callback) {
        runSequence (
            'clean',
            'build',
            'server',
            callback
        );
    }

    function build (callback) {
        runSequence (
            'build:stylesheet:vendor',
            [
                'build:javascript:vendor',
                'build:javascript:application'
            ],
            'build:html:template',
            'build:html:index',
            callback
        );
    }

    function cleanAll (callback) {
       return del('dist', callback);
    }
})();
