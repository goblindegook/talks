const yargs = require('yargs')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const minify = require('gulp-clean-css')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer')

const root = yargs.argv.root || '.'
const port = yargs.argv.port || 8000

gulp.task('styles', () =>
  gulp
    .src(['./theme/*.{sass,scss}'])
    .pipe(sass({ includePaths: ['./node_modules'] }))
    .pipe(gulp.dest('./dist/theme'))
)

gulp.task('build', gulp.parallel('styles'))

gulp.task('reload', () => gulp.src(['*.html', '*.md']).pipe(connect.reload()))

gulp.task('serve', () => {
  connect.server({
    root: root,
    port: port,
    host: '0.0.0.0',
    livereload: true,
  })

  gulp.watch(['*.html', '*.md'], gulp.series('reload'))

  gulp.watch(['./theme/*.{css,sass,scss}'], gulp.series('styles', 'reload'))
})

gulp.task('default', gulp.series('build'))
