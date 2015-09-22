module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            tests: ['build']
        },
        less: {
            compile: {
                files: {
                    'build/styles/style.css': './src/styles/style.less'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['*.html'], dest: 'build/'},
                    {expand: true, cwd: 'src/', src: ['images/**'], dest: 'build/'}
                ]
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    "expand": true,
                    "cwd": "src/",
                    "src": ["**/*.js"],
                    "dest": "build/",
                    "ext": ".js"
                }]
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['clean', 'less', 'copy', 'babel']);

};