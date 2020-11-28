const env = require('./_env')

export default {
  pages: [
    'pages/index/index',
    'pages/gallery-detail/gallery-detail',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#121213',
    navigationBarTitleText: env.siteName,
    navigationBarTextStyle: 'white',
  }
}
