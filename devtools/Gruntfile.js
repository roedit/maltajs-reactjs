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
    grunt.loadNpmTasks("grunt-babel");

    //CONFIGURATION
    grunt.initConfig({
        //CONNECT SERVER
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
        //COPY FILES
        copy: {
            production: {
                files: [
                    {
                        expand: true,
                        cwd: '../public/client',
                        src: ['favicon.ico', 'images/**/*'],
                        dest: '../production/client'}
                ]
            },
            index: {
                src: '../public/index.html',
                dest: '../production/index.html',
                options: {
                    process: function (content) {
                       var index = content.replace('shared.concat.css', 'shared.concat.min.css');
                        return index.replace('shared.concat.js', 'shared.concat.min.js');
                    }
                }
            }
        },
        //CONCAT FILES
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
                src: ['../production/client/js/concat']
            }
        },
        //ADD DEPENDENCIES AND TRANSFORM JSX TO JS
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
                        '../public/client/thirdparty/react-0.14.0/react-with-addons.min.js:react',
                        '../public/client/thirdparty/react-0.14.0/react-dom.min.js:react-dom',
                        '../public/client/thirdparty/jquery-2.1.4/jquery-2.1.4.min.js:jquery',
                        '../public/client/thirdparty/react-bootstrap-0.27.1/react-bootstrap.min.js:bootstrap',
                        '../public/client/thirdparty/perfect-scrollbar/perfect-scrollbar.min.js:scrollbar'
                    ],
                    browserifyOptions: {
                        debug: true
                    }
                },
                files: {
                    '../public/client/js/compiled/shared.concat.js': ['../public/client/js/concat/shared.concat.js']
                }
            },
            production: {
                options: {
                    alias: [
                        '../public/client/thirdparty/react-0.14.0/react-with-addons.min.js:react',
                        '../public/client/thirdparty/react-0.14.0/react-dom.min.js:react-dom',
                        '../public/client/thirdparty/jquery-2.1.4/jquery-2.1.4.min.js:jquery',
                        '../public/client/thirdparty/react-bootstrap-0.27.1/react-bootstrap.min.js:bootstrap',
                        '../public/client/thirdparty/perfect-scrollbar/perfect-scrollbar.min.js:scrollbar'
                    ]
                },
                files: {
                    '../production/client/js/compiled/shared.concat.min.js': ['../production/client/js/concat/shared.concat.min.js']
                }
            }
        },
        // TRANSFORM THE JSX TO JS
        babel: {
            production: {
                options: {
                    sourceMap: false
                },
                files: {
                    '../production/client/js/concat/shared.concat.js': '../public/client/js/concat/shared.concat.js'
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
                    '../production/client/js/concat/shared.concat.min.js': ['../production/client/js/concat/shared.concat.js']
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
    /**Js Tasks**/
        // Clean the js
        'clean:jsClean',
        // Concat the js
        'concat:shared_js',
        // Babel files to compiled folder
        'browserify:public',
    /**Css tasks**/
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
        // Clean the production folder
        'clean:productionClean',
        // Copy the public folder to production
        'copy:production', 'copy:index',
        // Transform JSX to JS
        'babel:production',
        // Uglify the js
        'uglify',
        // Babel files to compiled folder
        'browserify:production',
        // Clean the JS from production
        'clean:productionJsClean',
        // Minify the css
        'cssmin'
    ]);

    // Serve presentation locally
    grunt.registerTask('build-watch', ['watch']);

    // Serve presentation locally
    grunt.registerTask('server', ['connect']);

};