// .vitepress/theme/index.ts

import DefaultTheme from "vitepress/theme"
import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'

const playlist = [
  {
    name: '蓝雨',
    author: 'Jacky',
    file: 'https://github.com/chensidi/Jennie/blob/main/assets/musics/%E8%93%9D%E9%9B%A8.mp3?raw=true',
  },
  {
    name: '挪威的森林',
    author: 'Jennie',
    file: 'https://github.com/chensidi/Jennie/blame/main/assets/musics/%E6%8C%AA%E5%A8%81%E7%9A%84%E6%A3%AE%E6%9E%97.mp3?raw=true',
  },
  {
    name: '突然的自我 (Live)',
    author: 'Jennie',
    file: 'https://github.com/chensidi/Jennie/blob/main/assets/musics/%E7%AA%81%E7%84%B6%E7%9A%84%E8%87%AA%E6%88%91%20(Live).mp3?raw=true',
  },
]

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    vitepressMusic(playlist)
  }
}