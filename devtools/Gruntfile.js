/*global module*/
module.exports = function (grunt) {
    'use strict';

    // Load libraries (DEPENDENCIES)
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    // When preparing the production version uglify an minify
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    //CONFIGURATION
    grunt.initConfig({
        //Connect server
        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0', // network IP, not localhost
                    port: 8090,
                    base: '../public',
                    // directory: '../public/',
                    keepalive: true
                }
            }
        },
        //Concat files
        concat: {
            // JAVASCRIPT
            //SHARED
            shared_js: {
                options: {
                    // the banner is inserted at the top of the output
                    banner: '/** @jsx react.dom */\n'
                },
                src: [
                    '../source/js/**/*.js',
                    '../source/js/maltaJsApp.js'
                ],
                dest: '../public/client/js/compiled/shared.concat.js'
            },
            // CSS - create a helper folder - temp-shared
            css_shared: {
                src: ['../public/client/css/temp-shared/**/*.css'],
                dest: '../public/client/css/compiled/shared.concat.css'
            }
        },
        //SASS CONFIGURATION
        sass: {
            options: {
                style: 'nested',
                precision: 2
            },
            all: {
                files: [
                    {
                        expand: true,
                        cwd: '../source/scss/shared',
                        src: ['**/*.scss'],
                        dest: '../public/client/css/temp-shared',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: '../source/scss/modules',
                        src: ['**/*.scss'],
                        dest: '../public/client/css/temp-shared',
                        ext: '.css'
                    }
                ]
            }
        },
        //CLEAN FROM BEHIND
        clean: {
            options: {'force': true},
            jsClean: {
                src: ['../public/client/js/compiled']
            },
            tempJsClean: {
                src: ['../public/client/js/temp-shared']
            },
            cssClean: {
                src: ['../public/client/css/compiled']
            },
            sassClean: {
                src: ['../public/client/css/temp-shared']
            },
            sassCacheClean: {
                src: ['./.sass-cache']
            }
        },
        browserify: {
            jsScripts: {
                src: ['../public/client/js/temp-shared/shared.concat.js'],
                dest: '../public/client/js/compiled/shared.concat.js'
            }
        },

       // WATCHES
        watch: {
            scriptsAll: {
                files: [
                    '../source/js/maltaJsApp.js',
                    '../source/js/**/*.js'
                ],
                tasks: [
                    'clean:jsClean',
                    'concat:shared_js'
                ]
            },
            sassAll: {
                files: '../source/scss/**/*.scss',
                tasks: [
                    'clean:cssClean',
                    'sass:all',
                    'concat:css_shared',
                    'clean:sassClean',
                    'clean:sassCacheClean'
                ]
            }
        }
    });

    // Register the default tasks
    grunt.registerTask('default', [ // Default: DEV
        // Clean the js
        'clean:jsClean',
        // Concat the js
        'concat:shared_js',
        // Clean the scs
        'clean:cssClean',
        // Generate the scc
        'sass:all',
        // Concat the css generated
        'concat:css_shared',
        // Clean the generated css
        'clean:sassClean',
        // Clean the temporary sass
        'clean:sassCacheClean'
        // Browserify the concatenated files
        //'browserify:jsScripts',
        // Clean the temporary concat
        //'clean:tempJsClean'
    ]);

    // Serve presentation locally
    grunt.registerTask('build-watch', ['watch']);

    // Serve presentation locally
    grunt.registerTask('server', ['connect']);

};