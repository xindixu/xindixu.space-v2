module.exports = {
  base: '/blog/',
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
          '/': [/* ... */]
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
