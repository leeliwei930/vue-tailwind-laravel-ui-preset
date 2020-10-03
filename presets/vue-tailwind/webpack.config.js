module.exports =
{
  devtool: 'inline-source-map',
  resolve: {
    roots: [
      path.resolve(__dirname, 'resources/presets/vue-tailwind-preset/vue/'),
    ],
      extensions: [ '.js', '.vue', '.scss', '.css'],
      alias: {
        "@": `${__dirname}/resources/presets/vue-tailwind-preset/vue`,
        "@css": `${__dirname}/resources/presets/vue-tailwind-preset/css`,
      },
    modules: [
      'node_modules',

    ]
},
  output: {
    chunkFilename: "public/js/chunks/[name].js",

  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader'],
          },
          {
            use: ['raw-loader', 'pug-plain-loader'],
          },
        ],
      },
      {
        test: /\.postcss$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
    ]
  }
};

