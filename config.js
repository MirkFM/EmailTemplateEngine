let buildPath = {
    image: './assets/img/',
    html: './'
};

let srcPath = {
    image: ['./dist/img/**/*.*', '!dist/img/images/**/*.*'],
    html: ['dist/pug/**/*.pug', '!dist/pug/**/_*.pug']
};

let watchPath = {
    html: 'dist/pug/**/*.pug'
};

// src path is default watch path 
watchPath = Object.assign({}, srcPath, watchPath);

module.exports = {
    path: {
        build: buildPath,
        src: srcPath,
        watch: watchPath
    }
};
