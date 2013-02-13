module.exports = function (grunt) {

    var dirs = {
        base: '',
        src: 'src/'
    }, baseDir = function (path) {
        return dirs.base + path;
    }, srcDir = function (path) {
        return dirs.src + path;
    };

    // Build configuration
    grunt.initConfig({
        meta: {
            version: '0.1',
            banner: '/*! SampleApp - v<%= meta.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                'Copyright (C) 2012, Your Name; GPLv2 licensed. */'
        },
        concat: {
            dist: {
                src: [
                    '<banner:meta.banner>',
                    srcDir('foo.js'),
                    srcDir('bar.js')
                ],
                dest: baseDir('output/app-all-debug.js')
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest: baseDir('output/app-all.js')
            }
        },
        uglify: {
            // Uglify options
        }
    });

    // Define tasks
    grunt.registerTask('build',   'concat min');
    grunt.registerTask('test',    'build lint');
    grunt.registerTask('default', 'build');
};