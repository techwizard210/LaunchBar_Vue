module.exports = {
  publicPath: ''
}
chainWebpack: (config) => {
  config
      .plugin('html')
      .tap(args => {
          args[0].meta = {viewport: 'width=device-width,initial-scale=1,user-scalable=no'};

       return args;
  })
}

module.exports = {
  publicPath: '/LaunchBar/'
}