let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix
    .babelConfig({
        plugins: ['@babel/plugin-syntax-dynamic-import'],
    })
    .webpackConfig(require('./webpack.config.js'))
    .js('resources/presets/vue-tailwind-preset/vue/app.js', 'public/js/app.js')
    .postCss('resources/presets/vue-tailwind-preset/css/main.css','public/css/app.css')
    .options({
        processCssUrls: false,
        postCss: require('./postcss.config.js').plugins
    })
.disableNotifications();

