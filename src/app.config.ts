export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/post/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'images/home.png',
        selectedIconPath: 'images/homeSelected.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'images/mine.png',
        selectedIconPath: 'images/mineSelected.png',
      }
    ]
  }
})
