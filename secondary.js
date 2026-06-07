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
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 120) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
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

      // Show "Computing" state
      incomeDisplay.innerHTML = `<span style="font-size: 14px; color: var(--text-muted); font-style: italic; letter-spacing: 2px;">${translate('AI 调度模型计算中...')}</span>`;

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        // The "Growth Multiplier" model (Hidden from competitor analysis)
        const baseAlpha = 342.5; 
        const densityBeta = 18.2;
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

        incomeDisplay.innerHTML = `
          <div style="font-size: 14px; margin-bottom: 8px; color: ${color}; font-weight: 800; letter-spacing: 1px; animation: fadeIn 0.4s ease;">
            ${translate(grade)}
          </div>
          <div style="animation: fadeIn 0.6s ease;">
            <span style="font-size: 0.8em; opacity: 0.6; margin-right: 4px;">¥</span>${lowRange.toLocaleString()} - ${highRange.toLocaleString()}
          </div>
        `;
      }, 600); // 600ms of simulated "Intelligence"
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
