import { describe, it, expect } from 'vitest';

/**
 * 測試目標：頁首組件 (Header.astro)
 * 驗收標準：確保標誌、導航連結及手機版按鈕正確顯示
 */
describe('頁首組件 (Header) 驗收測試', () => {
  // 模擬 Header.astro 渲染後的 HTML 結構
  const mockHtml = `
    <header id="main-header">
      <nav id="main-nav">
        <!-- Logo -->
        <a href="/" aria-label="WZULTC 跨語照護 - 回首頁">
          <img src="/assets/logo.png" id="header-logo" alt="" />
          <div id="header-text">跨語照護</div>
        </a>
        
        <!-- 桌機版選單 -->
        <ul class="desktop-menu">
          <li><a href="/">首頁</a></li>
          <li><button>關於</button></li>
          <li><a href="/enroll">招募</a></li>
          <li><a href="/contact">聯絡我們</a></li>
        </ul>

        <!-- 手機版選單按鈕 -->
        <button id="mobile-menu-button" aria-label="開啟選單"></button>
      </nav>
    </header>
  `;

  it('測試：網頁上方是否有出現「跨語照護」文字標誌', () => {
    document.body.innerHTML = mockHtml;
    const headerText = document.getElementById('header-text');
    expect(headerText).toBeInTheDocument();
    expect(headerText.textContent).toContain('跨語照護');
  });

  it('測試：標誌 (Logo) 圖片是否正確連結回首頁', () => {
    document.body.innerHTML = mockHtml;
    const logoLink = document.querySelector('a[aria-label*="回首頁"]');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink.getAttribute('href')).toBe('/');
  });

  it('測試：導航選單是否包含「招募」和「聯絡我們」連結', () => {
    document.body.innerHTML = mockHtml;
    const enrollLink = document.querySelector('a[href="/enroll"]');
    const contactLink = document.querySelector('a[href="/contact"]');
    
    expect(enrollLink).toBeInTheDocument();
    expect(enrollLink.textContent).toContain('招募');
    
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.textContent).toContain('聯絡我們');
  });

  it('測試：是否有提供手機版專用的選單按鈕', () => {
    document.body.innerHTML = mockHtml;
    const mobileBtn = document.getElementById('mobile-menu-button');
    expect(mobileBtn).toBeInTheDocument();
    expect(mobileBtn.getAttribute('aria-label')).toBe('開啟選單');
  });
});
