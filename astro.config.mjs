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
    '/files/mid-ai': 'https://drive.google.com/file/d/1FTc9StYzkMXGK9jM_EMp8TixmQbIfxIv/view?usp=sharing',
    '/prototype/ai': 'https://davidkuodcam-crypto.github.io/VTuber/AITranslator_v1.html',
    '/files/mid-chinese-doc': 'https://docs.google.com/document/d/1AKz97AlUuEnVFlCtSkV5z5ECQpn244X5/edit?usp=drive_link&ouid=113390623339640898195&rtpof=true&sd=true',
    '/files/mid-chinese-pdf': 'https://drive.google.com/file/d/1MReE9EYd2ove05M6yGWvkCNAE4Pp_TRX/view?usp=drive_link'
  },

  build: {
    assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});