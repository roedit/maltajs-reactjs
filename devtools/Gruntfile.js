/*global module*/
module.exports = function (grunt) {
    'use strict';

    // Load libraries (DEPENDENCIES)
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-browserify");

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
                       var index = content.replace('require([\'app\']);', 'require([\'appProduction\']);');
                        return index.replace('<link href="client/css/compiled/shared.concat.css" rel="stylesheet" />', '<link href="client/css/compiled/shared.concat.min.css" rel="stylesheet" />');
                    }
                }
            }
        },
        //Concat files
        concat: {
            // JAVASCRIPT
            shared_js: {
                src: [
                    '../public/client/appConfig.js',
                    '../source/js/**/*.js',
                    '../source/js/maltaJsApp.js'
                ],
                dest: '../public/client/js/concat/shared.concat.js'
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
                src: ['../public/client/js/compiled', '../public/client/js/concat']
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
        browserify: {
            public: {
                options: {
                    transform: [
                        ['babelify', {
                            loose: 'all',
                            "compact": false
                        }]
                    ],
                    alias: [
                        '../public/client/thirdparty/react-0.13.3/react-with-addons.min.js:react',
                        '../public/client/thirdparty/jquery-2.1.4/jquery-2.1.4.min.js:jquery',
                        '../public/client/thirdparty/react-bootstrap/react-bootstrap.min.js:bootstrap',
                        '../public/client/thirdparty/perfect-scrollbar/perfect-scrollbar.min.js:scrollbar'
                    ]/*,
                    browserifyOptions: {
                        debug: true
                    }*/
                },
                files: {
                    '../public/client/js/compiled/shared.concat.js': ['../public/client/js/concat/shared.concat.js']
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
    grunt.registerTask('default', [
    /**
     * Js Tasks
     */
        // Clean the js
        'clean:jsClean',
        // Concat the js
        'concat:shared_js',
        // Babel files to compiled folder
        'browserify',
    /**
     * Css tasks
     */
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
    grunt.registerTask('production', [
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