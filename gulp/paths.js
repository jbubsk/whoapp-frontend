var appRoot = './webapp/',
    distRoot = './www/dist/';

module.exports = {
    src: {
        app: appRoot + 'js/application.js',
        js: appRoot + '**/*.js',
        html: ['./index.html'],
        scss: appRoot + 'styles/**/*.scss',
        style: 'styles/',
        img: 'img'
    },

    dest: {
        app: 'application.js',
        lib: 'libraries.js',
        style: 'style.css',
        lib_style: 'lib-style.css'
    },

    dist: distRoot,
    dist_js: distRoot,
    dist_js_lib: distRoot,
    dist_styles: distRoot,
    dist_img: distRoot + 'img/',

    lib_bower: './bower_components/',
    lib_node: './node_modules/',

    dist_all: [
        distRoot + 'dist/',
        distRoot + 'lib/',
        distRoot + 'img/'
    ],
    dist_all_dev: distRoot + 'dist/'
};
