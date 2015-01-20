module.exports = function (grunt) {

    // Load all **grunt tasks**.
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Less compiling
        less: {
            compile: {
                options: {
                    paths: ['css/'],
                    strictUnits: true,
                    // strictMath: true
                },
                files: {
                    'ep-mvp1.css': 'ep-mvp1.less'
                }
            }
        },

        // Watch task
        watch: {
            less: {
                files: [
                    '*.less'
                ],
                tasks: ['less']
            },
        }

    });

    // Default task
    grunt.registerTask('default', ['less', 'watch']);

};
