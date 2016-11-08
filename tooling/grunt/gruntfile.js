module.exports = function(grunt) {

  
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    config: {
      commonLib: 'assets/lib',
      jsLib: 'assets/js/lib',
      styleLib: '/lib',
      tmpDist: 'assets/dist',
      dist: 'public'
    },
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    
    sass: {
      frontend: {
        files: [{
          expand: true,
          cwd: 'assets/scss',
          src: ['**/*.scss'],
          dest: '<%= config.tmpDist %>/css/',
          ext: '.css'
        }]
      }
    },
    
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      frontend: {
        files: 
        [{
          expand: true,
          cwd: '<%= config.tmpDist %>/css',
          src: ['*.css', '!*.min.css'],
          dest: '<%= config.dist %>/css/',
          ext: '.min.css'
        }]
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      frontend: {
        src: [
          
          
          'assets/js/main.js'
        ],
        dest: '<%= config.tmpDist %>/js/app.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      frontend: {
        src: '<%= config.tmpDist %>/js/app.js',
        dest: '<%= config.dist %>/js/app.min.js'
      }
    },
    watch: {
      styles: {
        files: ['assets/scss/**/*.scss'],
        tasks: ['sass:frontend', 'cssmin:frontend'],
        options: {
          spawn: false
        }
      },
      scripts: {
        files: ['assets/js/**/*.js'],
        tasks: ['concat','uglify'],
        options: {
          spawn: false
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: 'localhost',
          base: '<%= config.dist %>',
          keepalive: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify', 'connect']);
  grunt.registerTask('css', ['sass', 'cssmin']);
};