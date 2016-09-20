# Grunt configuration updated to latest Grunt.  That means your minimum
# version necessary to run these tasks is Grunt 0.4.
#
# Please install this locally and install `grunt-cli` globally to run.
module.exports = (grunt) ->
  
  # Initialize the configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    shell:
      start:
        command: "coffee server.coffee"
    clean: 
      tmp: ["tmp"]
      dist: ["dist"]
    copy:
      vendor:
        files: [
          ##{expand: true, cwd: 'vendor/', src: ['fonts/**/*.*', 'images/**/*.*' , 'img/**/*.*'], dest: 'dist/'}
          {expand: true, cwd: 'vendor/', src: ['fonts/**/*.*'], dest: 'fonts/'}
          {expand: true, cwd: 'vendor/', src: ['images/**/*.*'], dest: 'images/'}
        ]
      bootstrap:
        files: [
          {expand: true, cwd: 'node_modules/bootstrap/dist/fonts/', src: ['**'], dest: '/fonts'}
        ]
    concat:
      vendor_js:
        src: [
        ]
        dest: "tmp/vendor.js"
      vendor_css:
        src: [

        ]
        dest: "tmp/vendor.css"
      js:
        src: [
          "vendor/EventEmitter.min.js"
          "node_modules/jquery/jquery.js"
          "node_modules/bootstrap/dist/js/bootstrap.js"
          "node_modules/react/dist/react.js"
          "node_modules/react-dom/dist/react-dom.js"
          "node_modules/react-router/umd/ReactRouter.js"
          "vendor/app.js"
          "dist/views/*.js"
          "tmp/script.js"
        ]
        dest: "dist/scripts/script.js"
      css:
        src: [
          "node_modules/bootstrap/dist/css/bootstrap.css"
          "node_modules/font-awesome/css/font-awesome.css"
          "tmp/style.min.css"
          "tmp/stylus.css"
        ]
        dest: "dist/styles/style.css"
    stylus:
      app:
        options:
          define:
            import_tree: require 'stylus-import-tree'
        files:
          "tmp/stylus.css": "app/stylus/style.styl"
    coffee:
      app:
        options:
          bare: true
        files:
          "tmp/script.js": ["app/coffee/libs/**/*.coffee","app/coffee/app.coffee"]
    cjsx:
      app:
        expand: true
        cwd: 'app/react/'
        src: ['**/*.cjsx']
        dest: 'dist/views'
        ext: '.js'       
    uglify:
      js:
        files:
          "dist/scripts/script.min.js": ["dist/scripts/script.js"]
    cssmin:
      target:
        files:
          "dist/styles/style.min.css": ["dist/styles/style.css"]
    pug:
      compile:
        options: 
          pretty: true
        files: 
          'build/index.html': ['app/views/index.jade']
    watch:
      development:
        files: ["app/**/*.*"]
        tasks: ["compile-development"]
      release:
        files: ["app/**/*.*"]
        tasks: ["compile-development"]



  # Load external Grunt task plugins.
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-pug'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-coffee-react'


  # Default task.
  grunt.registerTask "compile-scripts", ["coffee", "concat:vendor_js", "concat:js"]
  grunt.registerTask "compile-styles", ["stylus", "concat:vendor_css", "concat:css"]
  grunt.registerTask "compile-development", ["clean:tmp", "clean:dist", "cjsx:app", "compile-scripts",  "compile-styles", "copy:vendor", "copy:bootstrap", 'pug:compile']
  grunt.registerTask "compile-release", ["compile-development", "uglify:js", "cssmin"]

  grunt.registerTask "start-development", ["compile-development", "watch:development"]  
  grunt.registerTask "start", ["compile-release"]