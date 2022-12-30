import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
      navbar: [
          {
              text: '主页',
              link: '/'
          },
          {
              text: 'test1',
              children: [
                  {
                      text: '1',
                      link: '/pages/test1.md'
                  },
                  {
                    text: '2',
                    link: ''
                },
                {
                    text: '3',
                    link: ''
                }
              ]
          }
      ],
      sidebar: {
          '/pages/': [
              {
                  text: 'test1',
                  link: '/pages/test1.md'
              }
          ]
      }
  })
})