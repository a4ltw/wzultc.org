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
    '/files/mid-ai': 'https://drive.google.com/file/d/167WJAknP9BfwKPYyIXad-9nImCk2jcva/view?usp=drive_link',
    '/files/mid-zh': 'https://drive.google.com/file/d/1MReE9EYd2ove05M6yGWvkCNAE4Pp_TRX/view?usp=drive_link',
    '/files/mid-cs': 'https://drive.google.com/file/d/1EA6yqUaUg16OE1MJQCirnbNSZIOpLW1w/view?usp=drive_link',
    '/files/mid-et': 'https://drive.google.com/file/d/1qpyLD0FwwhAuUdDAcMR5lZnRz15BSyc9/view?usp=drive_link',
    '/files/mid-rp-pdf': 'https://drive.google.com/file/d/1Wi6Mc7Jr5N-vzlSz54D1wwjCvdsZDfPS/view?usp=drive_link',
    '/files/mid-rp-ppt': 'https://docs.google.com/presentation/d/1zc0J280ww02SLnmQTu51D9WeE7TDg9bH/edit?usp=sharing&ouid=113390623339640898195&rtpof=true&sd=true',
    '/tool/translate': 'https://aitranslator-navy.vercel.app/',
    '/tool/careconnect': 'https://nstc-ai-campus.vercel.app/',
    '/visit/1142': 'https://docs.google.com/forms/d/e/1FAIpQLSfDQn0imBffaQ93Az9l7L_X4iHx3nXvOlSc5-Ykx2ziYhRGFQ/viewform?usp=header',
    '/video/pcp-zh': 'https://youtu.be/43TIuD-CdCc',
    '/video/pcp-id': 'https://youtu.be/ewp13sfnF48',
    '/video/pcp-vi': 'https://youtu.be/gfExMdsj7ho'
  },

  build: {
    assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});