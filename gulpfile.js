var gulp = require('gulp');
var connect = require('gulp-connect');
var opn = require('opn');

gulp.task('connect', function(){
     connect.server({
	 root: 'Project1',
	 livereload: true,
	 port: 8888
	 });
	 opn('http://localhost:8888');
});
//������ � html
gulp.task('html', function(){
     gulp.src('./Project1/*.html')
	 .pipe(connect.reload());
});
//������ � css
gulp.task('css', function(){
     gulp.src('./Project1/css/*.css')
	 .pipe(connect.reload());
});	
//������ � js
gulp.task('js', function(){
     gulp.src('./Project1/js/*.js')
	 .pipe(connect.reload());
});	
//������
gulp.task('watch', function(){
     gulp.watch(['./Project1/*.html'], ['html']);
	 gulp.watch(['./Project1/css/*.css'], ['css']);
	 gulp.watch(['./Project1/js/*.js'], ['js']);
});

// ������ �� ���������
gulp.task('default', ['connect', 'watch']);
	 
	 