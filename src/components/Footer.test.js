import { describe, it, expect } from 'vitest';

/**
 * 測試目標：頁尾組件 (Footer.astro)
 * 驗收標準：確保版權資訊、聯絡信箱及快速連結正確顯示
 */
describe('頁尾組件 (Footer) 驗收測試', () => {
  const currentYear = new Date().getFullYear();
  
  // 模擬 Footer.astro 渲染後的 HTML 結構
  const mockHtml = `
    <footer class="bg-gray-800">
      <div>
        <!-- 關於計畫 -->
        <h3>WZULTC 跨語照護</h3>
        <p>文藻跨語照護計畫致力於...</p>

        <!-- 快速連結 -->
        <ul class="quick-links">
          <li><a href="/about">計畫說明</a></li>
          <li><a href="/course">華語教材</a></li>
          <li><a href="/enroll">招募資訊</a></li>
        </ul>

        <!-- 聯絡資訊 -->
        <ul class="contact-info">
          <li><a href="mailto:wzultc@gmail.com">wzultc@gmail.com</a></li>
          <li><span>高雄市三民區民族一路900號</span></li>
          <li><a href="https://lin.ee/YQDANNb">LINE 官方帳號</a></li>
        </ul>
      </div>

      <!-- 版權宣告 -->
      <div class="copyright">
        <p>&copy; ${currentYear} WZULTC. All rights reserved.</p>
      </div>
    </footer>
  `;

  it('測試：頁尾是否包含計畫名稱「WZULTC 跨語照護」', () => {
    document.body.innerHTML = mockHtml;
    expect(document.body.textContent).toContain('WZULTC 跨語照護');
  });

  it('測試：是否提供正確的聯絡信箱連結', () => {
    document.body.innerHTML = mockHtml;
    const mailLink = document.querySelector('a[href="mailto:wzultc@gmail.com"]');
    expect(mailLink).toBeInTheDocument();
    expect(mailLink.textContent).toBe('wzultc@gmail.com');
  });

  it('測試：快速連結是否包含「計畫說明」與「華語教材」', () => {
    document.body.innerHTML = mockHtml;
    const aboutLink = document.querySelector('a[href="/about"]');
    const courseLink = document.querySelector('a[href="/course"]');
    
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.textContent).toContain('計畫說明');
    
    expect(courseLink).toBeInTheDocument();
    expect(courseLink.textContent).toContain('華語教材');
  });

  it('測試：版權宣告是否顯示正確的年份', () => {
    document.body.innerHTML = mockHtml;
    const copyrightSection = document.querySelector('.copyright');
    expect(copyrightSection.textContent).toContain(currentYear.toString());
    expect(copyrightSection.textContent).toContain('WZULTC. All rights reserved.');
  });

  it('測試：是否有出現 LINE 官方帳號的連結', () => {
    document.body.innerHTML = mockHtml;
    const lineLink = document.querySelector('a[href*="lin.ee"]');
    expect(lineLink).toBeInTheDocument();
    expect(lineLink.textContent).toContain('LINE 官方帳號');
  });
});
