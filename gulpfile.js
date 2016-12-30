/**
 * Created by xif on 26/11/16.
 */
// Include gulp
var gulp = require('gulp');
var gls = require("gulp-live-server");

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var compass = require("gulp-compass");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babelify = require('babelify');
var browserify = require("browserify");
var connect = require("gulp-connect");
var source = require("vinyl-source-stream");

var ps = require("ps-node");

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/styles/**/*.scss')
        .pipe(compass({
            config_file: "./compass-config.rb",
            css:         "./build/css",
            sass:        "./src/styles"
        }))
        .pipe(autoprefixer())
        .pipe(rename("all.css"))
        .pipe(gulp.dest('build/css'))
        .pipe(connect.reload());;
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch("./src/main/**/*.{js,jsx}", ["lint", "build"]);
    gulp.watch("./src/html/*.*", ["copyStaticFiles"]);
    gulp.watch("./src/styles/**/*.scss", ["sass"]);
});

//Copy static files from html folder to build folder
gulp.task("copy-static-files", function(){
    return gulp.src("./src/html/*.*")
        .pipe(gulp.dest("./build"))
        .pipe(connect.reload());
});

//Convert ES6 ode in all js files in src/js folder and copy to
//build folder as bundle.js
gulp.task("build", function(){
    return browserify({
        entries: ["./src/main/entryPoint.jsx"]
    })
        .transform(babelify.configure({
            presets : ["es2015","react"]
        }))
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./build"))
        .pipe(connect.reload());;
});

gulp.task("server-start", function(){
    //1. run your script as a server
    var server = gls.new('./src/index.js');
    server.start();

    // Note: try wrapping in a function if getting an error like `TypeError: Bad argument at TypeError (native) at ChildProcess.spawn`
    gulp.watch("./src/index.js", function() {
        server.start.bind(server)()
    });
});

gulp.task("kill-server", function(){
    // A simple pid lookup
    ps.lookup({
        command: 'node',
    }, function(err, resultList ) {
        if (err) {
            throw new Error( err );
        }

        resultList.forEach(function(process){
            if(process.arguments == "./src/index.js"){
                console.log("Shutting down server running on port 3000");

                ps.kill(process.pid, {signal: 9}, function(e) {
                    if (e) {
                        throw new Error(e);
                    }
                    else {
                        console.log( 'Process %s has been killed without a clean-up!', process.pid);
                    }
                });
            }
        });
    });
});

gulp.task("start",[
    "kill-server",
    "copy-static-files",
    "lint",
    "sass",
    "build",
    "watch",
    "server-start"]
);