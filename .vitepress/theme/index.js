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
   {
    name: 'linda',
    author: 'Jennie',
    file: 'https://tx.stream.kg.qq.com/njc-kgsvp/1021_s_0bc35z7yqlifbqajrfovmzulv3wdrdualpsa.f0.m4a?vkey=47F16B0205577453B6A74D86896CB6001C4981CA734B66A91D48DE68A56C82B9C56616E4D7640F495A13B5B74582A0F645F81D7107DE541A9E989E7430C00457726196198DE8D4DAC6493453E7B458DCC96F3E08AED52BD0&dis_k=78a6680951eb0af22fecbc77c7b5f77e&dis_t=1759748966&fromtag=1021&ugcid=762983942_1758466275_562&nr=1',
  },
]

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    vitepressMusic(playlist)
  }
}