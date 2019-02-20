var gulp = require('gulp'),
    jade = require('gulp-jade');
 
// чтобы запустить эту задачу, наберите в командной строке gulp jade
gulp.task('jade', function() {
    return gulp.src('src/*.jade')
        .pipe(jade()) 
        .pipe(gulp.dest('./dist')); // указываем gulp куда положить скомпилированные HTML файлы
});