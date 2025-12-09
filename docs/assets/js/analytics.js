/**
 * 網站流量統計追蹤系統
 * 使用 Google Analytics 4 (GA4)
 *
 * 追蹤功能：
 * 1. 頁面瀏覽次數（自動）
 * 2. 音檔播放次數
 * 3. 檔案下載次數
 */

// ============================================
// Google Analytics 4 配置
// ============================================
// 請將下方的 'G-XXXXXXXXXX' 替換成您的 GA4 測量 ID
window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// 初始化 Google Analytics
function initGA4() {
    if (window.GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
        console.warn('⚠️  請設定您的 Google Analytics 測量 ID');
        return;
    }

    // 載入 gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${window.GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // 初始化 gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', window.GA_MEASUREMENT_ID, {
        'send_page_view': true,
        'page_title': document.title,
        'page_location': window.location.href,
        'page_path': window.location.pathname
    });

    console.log('✅ Google Analytics 已初始化');
}

// ============================================
// 音檔播放追蹤
// ============================================
function trackAudioPlay(audioElement) {
    const audioSrc = audioElement.src || audioElement.querySelector('source')?.src || 'unknown';
    const audioName = audioSrc.split('/').pop(); // 取得檔名

    // 追蹤播放開始
    audioElement.addEventListener('play', function() {
        if (window.gtag) {
            gtag('event', 'audio_play', {
                'event_category': 'Audio',
                'event_label': audioName,
                'audio_file': audioSrc,
                'page_path': window.location.pathname
            });
            console.log('🎵 追蹤音檔播放:', audioName);
        }
    }, { once: false });

    // 追蹤播放完成
    audioElement.addEventListener('ended', function() {
        if (window.gtag) {
            gtag('event', 'audio_complete', {
                'event_category': 'Audio',
                'event_label': audioName,
                'audio_file': audioSrc,
                'page_path': window.location.pathname
            });
            console.log('✅ 追蹤音檔播放完成:', audioName);
        }
    }, { once: false });
}

// 自動偵測頁面上的所有音檔並添加追蹤
function initAudioTracking() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        trackAudioPlay(audio);
    });
    console.log(`🎵 已為 ${audioElements.length} 個音檔添加追蹤`);
}

// ============================================
// 檔案下載追蹤
// ============================================
function trackDownload(linkElement) {
    const href = linkElement.href;
    const fileName = href.split('/').pop();
    const fileType = fileName.split('.').pop().toUpperCase();

    linkElement.addEventListener('click', function(e) {
        if (window.gtag) {
            gtag('event', 'file_download', {
                'event_category': 'Download',
                'event_label': fileName,
                'file_name': fileName,
                'file_type': fileType,
                'file_url': href,
                'page_path': window.location.pathname
            });
            console.log('📥 追蹤檔案下載:', fileName);
        }
    });
}

// 自動偵測頁面上的所有下載連結並添加追蹤
function initDownloadTracking() {
    // 偵測所有帶有 download 屬性的連結
    const downloadLinks = document.querySelectorAll('a[download]');
    downloadLinks.forEach(link => {
        trackDownload(link);
    });

    // 偵測所有 PDF、DOC、DOCX、ZIP 等檔案連結
    const fileLinks = document.querySelectorAll('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".zip"], a[href$=".rar"]');
    fileLinks.forEach(link => {
        if (!link.hasAttribute('download')) {
            trackDownload(link);
        }
    });

    console.log(`📥 已為 ${downloadLinks.length + fileLinks.length} 個下載連結添加追蹤`);
}

// ============================================
// 頁面瀏覽追蹤（用於 SPA 或動態載入頁面）
// ============================================
function trackPageView(pageTitle, pagePath) {
    if (window.gtag) {
        gtag('event', 'page_view', {
            'page_title': pageTitle || document.title,
            'page_location': window.location.href,
            'page_path': pagePath || window.location.pathname
        });
        console.log('👁️  追蹤頁面瀏覽:', pageTitle || document.title);
    }
}

// ============================================
// 自定義事件追蹤（供其他功能使用）
// ============================================
function trackCustomEvent(eventName, eventParams = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventParams);
        console.log('📊 追蹤自定義事件:', eventName, eventParams);
    }
}

// ============================================
// 初始化所有追蹤功能
// ============================================
function initAnalytics() {
    // 初始化 GA4
    initGA4();

    // 等待 DOM 完全載入後初始化追蹤
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initAudioTracking();
            initDownloadTracking();
        });
    } else {
        initAudioTracking();
        initDownloadTracking();
    }

    // 監聽動態添加的元素（使用 MutationObserver）
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // 元素節點
                    // 檢查新增的音檔
                    if (node.tagName === 'AUDIO') {
                        trackAudioPlay(node);
                    }
                    // 檢查新增的下載連結
                    if (node.tagName === 'A' && (node.hasAttribute('download') || /\.(pdf|doc|docx|zip|rar)$/i.test(node.href))) {
                        trackDownload(node);
                    }
                    // 檢查子元素
                    const audios = node.querySelectorAll?.('audio');
                    audios?.forEach(audio => trackAudioPlay(audio));

                    const downloads = node.querySelectorAll?.('a[download], a[href$=".pdf"]');
                    downloads?.forEach(link => trackDownload(link));
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// ============================================
// 自動執行
// ============================================
// 頁面載入時自動初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnalytics);
} else {
    initAnalytics();
}

// 匯出函數供外部使用
window.Analytics = {
    trackPageView: trackPageView,
    trackCustomEvent: trackCustomEvent,
    trackAudioPlay: trackAudioPlay,
    trackDownload: trackDownload
};
