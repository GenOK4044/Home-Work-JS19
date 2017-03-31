module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({



    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'prod/js/script.main.js',
      },
    },



    uglify:{
      dist: {
        src: ['prod/js/script.main.js'],
        dest: 'prod/js/script.main.min.js',
      },
    },



    sass: {
    dist: {
      files: {
        'src/styles/style.css':'src/styles/style.scss'
      }
    }
  },



   cssmin: {
      dist: {
        src: 'src/styles/*.css',
        dest: 'prod/style/css.main.css'
      }
    },



  watch: {
    sass: {
      files:['src/styles/*.scss'],
      tasks: ['sass'],
    }
  }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'sass','cssmin', 'watch']);


};
