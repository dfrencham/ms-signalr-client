var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('default', function () {
    return gulp
    .src('test/test.html')
    .pipe(mochaPhantomJS({ reporter: 'list' }));
});
