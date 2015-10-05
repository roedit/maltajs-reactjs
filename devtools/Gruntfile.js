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
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

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
        copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        cwd: '../public/',
                        src: ['**'],
                        dest: '../production/'}
                ]
            },
            index: {
                src: '../public/index.html',
                dest: '../production/index.html',
                options: {
                    process: function (content, srcpath) {
                       var index = content.replace('<!-- JSXTransformer -->', '');
                        index = index.replace('<script src="client/thirdparty/react-0.13.3/JSXTransformer.js"></script>', '');
                        index = index.replace('<script type="text/jsx" src="client/js/compiled/shared.concat.jsx"></script>', '<script type="text/javascript" src="client/js/compiled/shared.concat.min.js"></script>');
                        return index.replace('<link href="client/css/compiled/shared.concat.css" rel="stylesheet" />', '<link href="client/css/compiled/shared.concat.min.css" rel="stylesheet" />');

                    }
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
                dest: '../public/client/js/compiled/shared.concat.jsx'
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
                        cwd: '../source/scss/components',
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
            },
            productionClean: {
                src: ['../production/']
            },
            productionJsClean: {
                src: ['../production/client/js/compiled/']
            },
            productionCssClean: {
                src: ['../production/client/css/compiled/']
            }
        },
        //TRANSFORM JSX TO JS
        babel: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    '../production/client/js/compiled/shared.concat.js': '../public/client/js/compiled/shared.concat.jsx'
                }
            }
        },
        //MINIMIZE THE CSS
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '../production/client/css/compiled/shared.concat.min.css': ['../public/client/css/compiled/shared.concat.css']
                }
            }
        },
        // UGLIFY THE JAVASCRIPT
        uglify: {
            my_target: {
                files: {
                    '../production/client/js/compiled/shared.concat.min.js': ['../production/client/js/compiled/shared.concat.js']
                }
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
    ]);

    // Register the production task
    grunt.registerTask('production', [ // Default: DEV
        // Clean the js
        'clean:productionClean',
        // Concat the js
        'copy:main',
        // Copy and replace the jsx
        'copy:index',
        // Clean the js from production
        'clean:productionJsClean',
        // Clean the css from production
        'clean:productionCssClean',
        // Reactify files to js folder
        'babel',
        // Uglify the js
        'uglify',
        // Minify the css
        'cssmin'
    ]);

    // Serve presentation locally
    grunt.registerTask('build-watch', ['watch']);

    // Serve presentation locally
    grunt.registerTask('server', ['connect']);

};