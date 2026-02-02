// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wzultc.org',
  outDir: './docs',

  redirects: {
    '/fb': 'https://www.facebook.com/whc.usr',
    '/yt': 'https://www.youtube.com/@wzuusr',
    '/ig': 'https://www.instagram.com/whc_usr/',
    '/2025mid': 'https://drive.google.com/drive/folders/1VcAhRIBk_HRl5164vRlPwb_z8TC3hM_5?usp=sharing',
    '/2026apply': 'https://drive.google.com/drive/folders/1N7oVfIFglHcgmeXaF0Yxju_iIHHYJ_2C?usp=sharing',
    '/files/stcontract1': 'https://drive.google.com/file/d/1uHBdJpfQ6ZImUJwpQKSM-huZ0scEncKh/view?usp=sharing',
    '/files/stcontract2': 'https://drive.google.com/file/d/1YR21yuJKkhxEeV2I0X9f4x0xyj1lhF65/view?usp=sharing',
    '/files/mid-ai': 'https://drive.google.com/file/d/1FTc9StYzkMXGK9jM_EMp8TixmQbIfxIv/view?usp=sharing'
  },

  build: {
    assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});