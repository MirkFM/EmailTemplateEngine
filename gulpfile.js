const gulp = require('gulp');
const del = require('del');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync').create();
const $ = require('gulp-load-plugins')({
    renameFn: function(name) {
        return name.replace('gulp-', '').replace(/\s/g, '_');
    }
});

errorHandler = (err) => {
    $.notify.onError({
        title: "Gulp error in " + err.plugin,
        message: err.toString()
    })(err);
};

const path = require('./config').path;
const pugOptions = {
    filters: {
        tr: function(text, options) {
            tr&attributes(options)
                return text;
        },
        td: function(text, options) {
            td&attributes(options)
                return text;
        },
        div: function(text, options) {
            div&attributes(options)
                return text;
        },
        span: function(text, options) {
            span&attributes(options)
                return text;
        }
    }
}

gulp.task('server:init', () => {
    return browserSync.init({
    port: 3000,
        server: {
            baseDir: '.'
        },
        reloadDelay: 75
    });
});
gulp.task('server:reload', function(done) {
    browserSync.reload();
    done();
});

gulp.task('clean:html', () => {
    return del([path.build.html + '*.html', './templates']);
});
gulp.task('build:html', () => {
    return gulp.src(path.src.html)
        .pipe($.plumber({errorHandler: errorHandler}))
        .pipe($.pug({
            basedir: '.',
            filters: pugOptions.filters
        }))
        .pipe($.typograf({
            locale: ['ru', 'en-US']
        }))
        .pipe($.prettydiff({
            lang: "html",
            inchar: " ",
            insize: 2,
            force_indent: true,
            wrap: 0,
            textpreserve: true,
            spaceclose: true,
            mode: "beautify"
        }))
        .pipe(gulp.dest(path.build.html));
});
gulp.task('watch:html', () => {
    return gulp.watch(path.watch.html, gulp.series('build:html', 'server:reload'));
});

gulp.task('clean:image', () => {
    return del(path.build.image);
});
gulp.task('build:image', () => {
    return gulp.src(path.src.image)
        .pipe($.plumber({errorHandler: errorHandler}))
        .pipe($.newer(path.build.image))
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.image))
});
gulp.task('watch:image', () => {
    return gulp.watch(path.watch.image, gulp.series('build:image', 'server:reload'));
});


gulp.task('clean', gulp.parallel(
    'clean:image', 'clean:html'
));
gulp.task('build', gulp.series(
    'clean',
    'build:image',
    'build:html'
));
gulp.task('watch', gulp.parallel(
    'watch:image', 'watch:html'
));
gulp.task('default', gulp.series(
    'build:image',
    'build:html',
    gulp.parallel(
        'server:init', 'watch'
    )
));
