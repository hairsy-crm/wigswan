(() => {
  const SOURCING_INBOX = 'sourcing@wigswan.com';
  const form = document.getElementById('sourcingForm');
  const result = document.getElementById('requestResult');
  const preview = document.getElementById('briefPreview');
  const emailLink = document.getElementById('emailRequest');
  const copyButton = document.getElementById('copyBrief');
  const editButton = document.getElementById('editRequest');
  const copyStatus = document.getElementById('copyStatus');
  const buyerType = document.getElementById('buyerType');
  const navToggle = document.querySelector('.sourcing-nav-toggle');
  const nav = document.getElementById('sourcingNav');

  let currentBrief = '';

  const closeNavigation = () => {
    document.body.classList.remove('sourcing-nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
  };

  navToggle?.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('sourcing-nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));

  document.querySelectorAll('[data-buyer]').forEach((card) => {
    card.addEventListener('click', () => {
      buyerType.value = card.dataset.buyer || '';
      document.getElementById('request').scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => buyerType.focus({ preventScroll: true }), 500);
    });
  });

  const clean = (value) => String(value || '').trim();

  const createBrief = (data) => [
    'WIGSWAN GLOBAL SOURCING REQUEST',
    '',
    `Buyer type: ${clean(data.get('buyerType'))}`,
    `Company / brand: ${clean(data.get('company'))}`,
    `Country / market: ${clean(data.get('market'))}`,
    `Contact: ${clean(data.get('contactName'))}`,
    `Email: ${clean(data.get('email'))}`,
    `Product category: ${clean(data.get('category'))}`,
    `Estimated first order: ${clean(data.get('orderSize'))}`,
    `Reference link: ${clean(data.get('reference')) || 'Not provided'}`,
    '',
    'Requirement:',
    clean(data.get('details')),
    '',
    'Please reply with the next questions and a suitable sourcing path.'
  ].join('\n');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    currentBrief = createBrief(data);
    preview.textContent = currentBrief;
    const company = clean(data.get('company'));
    const category = clean(data.get('category'));
    const subject = `Sourcing request — ${company} — ${category}`;
    emailLink.href = `mailto:${SOURCING_INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(currentBrief)}`;
    form.hidden = true;
    result.hidden = false;
    copyStatus.textContent = '';
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(currentBrief);
      copyStatus.textContent = 'Brief copied. You can paste it into your preferred email or messaging app.';
    } catch (error) {
      const range = document.createRange();
      range.selectNodeContents(preview);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = 'The brief is selected. Press Ctrl+C or Command+C to copy it.';
    }
  });

  editButton?.addEventListener('click', () => {
    result.hidden = true;
    form.hidden = false;
    copyStatus.textContent = '';
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
