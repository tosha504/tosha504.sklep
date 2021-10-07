const mix = require('laravel-mix');
mix.sass('scss/index.scss', 'src').options({
  processCssUrls: false,
  postCss: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false,
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}).webpackConfig({
  module: {
    rules: [
      {
        test: /\.scss/,
        loader: 'import-glob-loader',
      },
    ],
  },
});
