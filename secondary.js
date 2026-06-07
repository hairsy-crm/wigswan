/**
 * WIGSWAN 2.0 Strategic Script
 * Handles high-end interactions and the obfuscated ROI model.
 */

document.addEventListener('DOMContentLoaded', () => {
  const i18n = window.WIGSWAN_I18N;
  const translate = (text) => i18n ? i18n.t(text) : text;

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

  // --- ROI Diagnostic Model (Obfuscated & Weighted) ---
  const stationInput = document.getElementById('stationCount');
  const trafficInput = document.getElementById('dailyTraffic');
  const incomeDisplay = document.getElementById('potentialIncome');

  if (stationInput && trafficInput && incomeDisplay) {
    let debounceTimer;
    
    const runDiagnostic = () => {
      const s = parseInt(stationInput.value) || 0;
      const t = parseInt(trafficInput.value) || 0;
      const currentLang = i18n ? i18n.lang() : 'zh';

      // Show "Computing" state
      incomeDisplay.innerHTML = `<span style="font-size: 14px; color: var(--text-muted); font-style: italic; letter-spacing: 2px;">${translate('AI 调度模型计算中...')}</span>`;

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        // --- Market-Specific Scaling Logic ---
        let baseAlpha = 342.5; 
        let densityBeta = 18.2;
        let leadsMultiplier = 1;

        if (currentLang === 'zh') {
          // China Market: Focus on High-Volume Traffic & AI Matrix Efficiency
          baseAlpha = 450.2; // Higher yield per station with AI dispatch
          densityBeta = 25.5; // Higher conversion of traffic due to content factory
          leadsMultiplier = 3.5; // AI Matrix Factory impact
        }

        const rawPotential = (s * baseAlpha) + (t * densityBeta * 12.5);
        
        let grade = 'B级：稳健增长型';
        let color = '#94a3b8';
        if (rawPotential > 18000) {
          grade = 'S级：旗舰增长引擎';
          color = '#e3a760';
        } else if (rawPotential > 9000) {
          grade = 'A级：高效爆发型';
          color = '#c5a059';
        }

        const lowRange = Math.round(rawPotential * 0.82 / 100) * 100;
        const highRange = Math.round(rawPotential * 1.35 / 100) * 100;

        // Custom Chinese Display with Leads Count & Scarcity
        if (currentLang === 'zh') {
          const estimatedLeads = Math.round(t * leadsMultiplier * 4.2);
          incomeDisplay.innerHTML = `
            <div style="font-size: 14px; margin-bottom: 8px; color: ${color}; font-weight: 800; letter-spacing: 1px;">
              ${translate(grade)}
            </div>
            <div style="margin-bottom: 12px; font-size: 16px; color: var(--accent-gold);">
              预计每月新增精准线索: <strong>${estimatedLeads}</strong> 条
            </div>
            <div style="margin-bottom: 15px;">
              <span style="font-size: 0.8em; opacity: 0.6; margin-right: 4px;">¥</span>${lowRange.toLocaleString()} - ${highRange.toLocaleString()}
            </div>
            <div style="background: rgba(255,71,87,0.1); border: 1px solid #ff4757; color: #ff4757; padding: 8px; border-radius: 6px; font-size: 12px; font-weight: bold;">
              ⚠️ 您所在的商圈目前仅剩 1 个名额
            </div>
          `;
        } else {
          incomeDisplay.innerHTML = `
            <div style="font-size: 14px; margin-bottom: 8px; color: ${color}; font-weight: 800; letter-spacing: 1px;">
              ${translate(grade)}
            </div>
            <div>
              <span style="font-size: 0.8em; opacity: 0.6; margin-right: 4px;">¥</span>${lowRange.toLocaleString()} - ${highRange.toLocaleString()}
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
});
