module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                dist : {
                    options: {
                        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                        mangle: false,
                        sourceMap: true
                    },
                    files: {
                        'dist/<%= pkg.name %>.min.js': [
                            'src/linkwithjqueryautocomplete/plugin.js',
                            'src/rcmFileChooser/plugin.js',
                        ]
                    }
                }
            },
            concat: {
                options: {
                },
                dist: {
                    files: {
                        'dist/<%= pkg.name %>.js': [
                            'src/linkwithjqueryautocomplete/plugin.js',
                            'src/rcmFileChooser/plugin.js',
                        ]
                    }
                }
            }
        }
    );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat']);
};
