module.exports = {
  // required to pubish on GH pages
  options: {
    output: 'docs'
  },

  use: [
    '@neutrinojs/airbnb-base', [
      '@neutrinojs/web',
      {
        style: {
          loaders: [{
            loader: 'sass-loader',
          }]
        },
        html: {
          title: 'NeutrinoBoilerPlate'
        }
      }
    ],
  ]
};
