{
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            config: './postcss.config.js', // ensure it's correctly pointing to your PostCSS config file
          },
        },
      },
    ],
  }
  