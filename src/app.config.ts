import config from "./_config";

export default {
  pages: [
    'pages/index/index',
    'pages/gallery-detail/gallery-detail',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#121213',
    navigationBarTitleText: config.siteName,
    navigationBarTextStyle: 'white',
  }
}
