// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wzultc.org',
  outDir: './docs',

  redirects: {
    '/course/00/i': '/course/i/00',
    '/course/01/i': '/course/i/01',
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
    '/files/vis-st': 'https://docs.google.com/presentation/d/1G3gW7m3XeMIoaUdOARKWX4R-XjYOSvyl/edit?usp=sharing',
    '/files/vis-mdexam': 'https://docs.google.com/document/d/1AtI5YT2pJs_qTopAQaF_8XXHFcf6st6g/edit?usp=sharing',
    '/files/vis-course': 'https://drive.google.com/file/d/1A6v9nRL0DxUpItEI6nmuo3mDQIDxBdBn/view?usp=sharing',
    '/files/vis-mat': 'https://drive.google.com/file/d/1tvXHGVdhWwk3L4ZoGcMMbSoufKaLs82J/view?usp=sharing',
    '/files/vis-ai': 'https://drive.google.com/file/d/1Hxqa9ZH2qcvGxLERb8GE20Xg7GKw0gAb/view?usp=sharing',
    '/files/vis-vid': 'https://drive.google.com/file/d/1OctI-5HpJ0n_FNRoCmQ4jCUcn29YDaww/view?usp=sharing',
    '/tool/translate': 'https://aitranslator-navy.vercel.app/',
    '/tool/careconnect': 'https://nstc-ai-campus.vercel.app/',
    '/tool/VirtualPatient': 'https://vtuber01.vercel.app/VirtualPatient.html',
    '/visit/1142': 'https://docs.google.com/forms/d/e/1FAIpQLSfDQn0imBffaQ93Az9l7L_X4iHx3nXvOlSc5-Ykx2ziYhRGFQ/viewform?usp=header',
    '/form/connect': 'https://docs.google.com/forms/d/e/1FAIpQLScafcpKN-6G71vMB0Fnsh8B_AN1q4d69OLcYTUD3WWWI5LocA/viewform',
    '/video/pcp-zh': 'https://youtu.be/43TIuD-CdCc',
    '/video/pcp-id': 'https://youtu.be/ewp13sfnF48',
    '/video/pcp-vi': 'https://youtu.be/gfExMdsj7ho',
    '/file/20260603': 'https://drive.google.com/drive/folders/1yjnkI2UbWA4K-xguMNAp17lHNTajSY14?usp=drive_link',
    '/file/20260609': 'https://drive.google.com/drive/folders/1N3M_6iCv80TXhmjhbwd5GrTQoZDzZAV6?usp=drive_link',
    '/video/ccl-id': 'https://youtu.be/vqMtYoL-cMM',
    '/video/ccl-th': 'https://youtu.be/hjQe_-D5GqA',
    '/video/ccl-vi': 'https://youtu.be/n4gryq5iYnc',
    '/video/ccl-ph': 'https://youtu.be/aW5auRpYFLc',
    '/video/oral-zh': 'https://youtu.be/_K2JZYlVzns',
    '/video/oral-vi': 'https://youtu.be/oT_qFTb1HIU',
    '/video/cath-zh': 'https://youtu.be/23_UlcGaDfI',
    '/video/cath-vi': 'https://youtu.be/-yZwJCEzW9k',
    '/video/ngt-zh':  'https://youtu.be/XFuY9lVEhuk',
    '/video/ngt-vi':  'https://youtu.be/tBpFEgdqq_M',
    '/video/A01': 'https://youtu.be/soXI4plE9Z8',
    '/video/A02': 'https://youtu.be/db0HuzSJwRQ',
    '/video/B01': 'https://youtu.be/ADtgtbw0BvE',
    '/video/C01': 'https://youtu.be/uHLYbFA9k7M',
    '/video/C02': 'https://youtu.be/Lwx7nRca0U0'
  },

  build: {
    assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});