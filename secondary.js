/**
 * WIGSWAN 2.0 Strategic Script
 * Handles high-end interactions and the public diagnostic preview.
 */

document.addEventListener('DOMContentLoaded', () => {
  const i18n = window.WIGSWAN_I18N;
  const translate = (text) => i18n ? i18n.t(text) : text;

  // --- Preloader Logic ---
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('fade-out');
      }, 500); // Small buffer for smoothness
    });
    
    // Safety timeout: force hide after 5s
    setTimeout(() => {
      if (!preloader.classList.contains('fade-out')) {
        preloader.classList.add('fade-out');
      }
    }, 5000);
  }

  // --- Hero Background Video Compatibility ---
  const heroVideo = document.querySelector('.hero-video-bg');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute('muted', '');
    heroVideo.setAttribute('playsinline', '');
    heroVideo.setAttribute('webkit-playsinline', '');
    heroVideo.setAttribute('x5-playsinline', '');

    const tryPlayHeroVideo = () => {
      const playPromise = heroVideo.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          heroVideo.classList.add('video-fallback-visible');
        });
      }
    };

    tryPlayHeroVideo();
    document.addEventListener('WeixinJSBridgeReady', tryPlayHeroVideo, false);
    document.addEventListener('touchstart', tryPlayHeroVideo, { once: true, passive: true });
  }

  // --- Navigation Highlighting ---
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.main-nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollPos >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (current && href.endsWith(`#${current}`)) {
        link.classList.add('active');
      }
    });
    
    // Default to first link if at top
    if (scrollPos < 300 && navLinks.length > 0) {
      navLinks[0].classList.add('active');
    }
  });

  // --- Public Diagnostic Preview ---
  const stationInput = document.getElementById('stationCount');
  const trafficInput = document.getElementById('dailyTraffic');
  const incomeDisplay = document.getElementById('potentialIncome');

  if (stationInput && trafficInput && incomeDisplay) {
    let debounceTimer;
    
    const runDiagnostic = () => {
      const s = parseInt(stationInput.value) || 0;
      const t = parseInt(trafficInput.value) || 0;
      const currentLang = i18n ? i18n.lang() : 'zh';

      incomeDisplay.innerHTML = `<span style="font-size: 14px; color: var(--text-muted); font-style: italic; letter-spacing: 2px;">${translate('增长潜力评估中...')}</span>`;

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const previewScore = Math.min(100, Math.round((s * 12) + (t * 4)));
        
        let grade = 'B级：稳健增长型';
        let color = '#94a3b8';
        if (previewScore >= 72) {
          grade = 'S级：旗舰增长型';
          color = '#e3a760';
        } else if (previewScore >= 42) {
          grade = 'A级：高效增长型';
          color = '#c5a059';
        }

        const confidence = previewScore >= 72 ? '高潜力合作样本' : previewScore >= 42 ? '具备清晰增长空间' : '适合基础能力梳理';
        if (currentLang === 'zh') {
          incomeDisplay.innerHTML = `
            <div style="font-size: 14px; margin-bottom: 8px; color: ${color}; font-weight: 800; letter-spacing: 1px;">
              ${translate(grade)}
            </div>
            <div style="margin-bottom: 12px; font-size: 18px; color: var(--accent-gold); font-weight: 900;">
              ${translate(confidence)}
            </div>
            <div style="color: var(--text-muted); font-size: 13px; line-height: 1.7;">
              ${translate('详细评估结果将由增长顾问结合门店实际情况解读。')}
            </div>
          `;
        } else {
          incomeDisplay.innerHTML = `
            <div style="font-size: 14px; margin-bottom: 8px; color: ${color}; font-weight: 800; letter-spacing: 1px;">
              ${translate(grade)}
            </div>
            <div style="color: var(--accent-gold); font-size: 18px; font-weight: 900; margin-bottom: 10px;">
              ${translate(confidence)}
            </div>
            <div style="color: var(--text-muted); font-size: 13px; line-height: 1.7;">
              ${translate('详细评估结果将由增长顾问结合门店实际情况解读。')}
            </div>
          `;
        }
      }, 600);
    };

    // Initial run
    runDiagnostic();

    // Event listeners
    stationInput.addEventListener('input', runDiagnostic);
    trafficInput.addEventListener('input', runDiagnostic);
  }

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 90,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Video Modal Logic ---
  const openVideoBtn = document.getElementById('openVideo');
  const closeVideoBtn = document.getElementById('closeVideo');
  const videoModal = document.getElementById('videoModal');
  const promoVideo = document.getElementById('promoVideo');

  if (openVideoBtn && videoModal && promoVideo) {
    openVideoBtn.addEventListener('click', () => {
      videoModal.classList.add('active');
      promoVideo.currentTime = 0;
      promoVideo.play();
      document.body.style.overflow = 'hidden'; // Prevent scroll
    });

    const closeHandler = () => {
      videoModal.classList.remove('active');
      promoVideo.pause();
      document.body.style.overflow = ''; // Restore scroll
    };

    closeVideoBtn.addEventListener('click', closeHandler);
    
    // Close on click outside
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeHandler();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeHandler();
      }
    });
  }
});
