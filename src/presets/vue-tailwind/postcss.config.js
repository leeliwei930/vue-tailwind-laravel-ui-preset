module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        require('postcss-nested')(
            { bubble: ['screen', 'responsive'] }
        ), // or require('postcss-nesting')
        require('autoprefixer'),
    ],
};
