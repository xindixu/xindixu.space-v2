module.exports = {
  base: '/blog/',
  head: [
    ['link', { rel:'stylesheet', href: `https://fonts.googleapis.com/css?family=Cormorant+Upright|Dancing+Script` }],
    ['link', { rel:'stylesheet', href: `https://use.fontawesome.com/releases/v5.0.6/css/all.css` }],
    ['link', { rel:'stylesheet', href: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css` }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Xindi\'s Blog',
      description: 'Xindi is a lazy kitty so she needs a better blog to write stuffs'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '欣笛的博客',
      description: '咩'
    }
  },
  port:3000,
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'MainRoom', link: '/' },
          { text: 'MediaMiind', link: '/mediaMind/' },
          { text: 'CodingCrush', link: '/codingCrush/' },
        ],
        sidebar: {
          sidebarDepth:2,
          activeHeaderLinks: false,
          '/codingCrush/':[
            '',
            '/codingCrush/freeCodeCamp/'
          ],
          '/codingCrush/freeCodeCamp/': [
            '',
            '1-BasicJavaScript',
            '2-ES6',
            '3-RegularExpression'
          ]
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: 'MainRoom', link: '/zh/' },
          { text: 'MediaMiind', link: '/zh/mediaMind/' },
          { text: 'CodingCrush', link: '/zh/codingCrush/' },
        ],
        sidebar: {
          '/zh/': [/* ... */]
        }
      }
    }
  }
};
