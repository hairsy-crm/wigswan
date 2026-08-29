(() => {
  const SOURCING_INBOX = '48076124@qq.com';
  const FORM_ENDPOINT = `https://formsubmit.co/ajax/${SOURCING_INBOX}`;
  const form = document.getElementById('sourcingForm');
  const result = document.getElementById('requestResult');
  const preview = document.getElementById('briefPreview');
  const sendButton = document.getElementById('sendRequest');
  const copyButton = document.getElementById('copyBrief');
  const editButton = document.getElementById('editRequest');
  const submissionStatus = document.getElementById('submissionStatus');
  const buyerType = document.getElementById('buyerType');
  const navToggle = document.querySelector('.sourcing-nav-toggle');
  const nav = document.getElementById('sourcingNav');
  const i18n = window.WIGSWANSourcingI18n;
  const t = (key) => i18n?.t(key) || key;

  let currentBrief = '';
  let currentRequest = null;

  const closeNavigation = () => {
    document.body.classList.remove('sourcing-nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', t('Open navigation'));
  };

  navToggle?.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('sourcing-nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', t(isOpen ? 'Close navigation' : 'Open navigation'));
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
    t('WIGSWAN GLOBAL SOURCING REQUEST'),
    '',
    `${t('Buyer type')}: ${t(clean(data.get('buyerType')))}`,
    `${t('Company / brand')}: ${clean(data.get('company'))}`,
    `${t('Country / market')}: ${clean(data.get('market'))}`,
    `${t('Contact')}: ${clean(data.get('contactName'))}`,
    `${t('Email')}: ${clean(data.get('email'))}`,
    `${t('Product category')}: ${t(clean(data.get('category')))}`,
    `${t('Estimated first order')}: ${t(clean(data.get('orderSize')))}`,
    `${t('Reference link')}: ${clean(data.get('reference')) || t('Not provided')}`,
    '',
    t('Requirement:'),
    clean(data.get('details')),
    '',
    t('Please reply with the next questions and a suitable sourcing path.')
  ].join('\n');

  const buildRequest = (data) => {
    currentBrief = createBrief(data);
    currentRequest = {
      _subject: `${t('WIGSWAN sourcing request')} — ${clean(data.get('company'))} — ${t(clean(data.get('category')))}`,
      _template: 'table',
      _url: `https://wigswan.com/global-sourcing.html?lang=${i18n?.getLang() || 'en'}`,
      email: clean(data.get('email')),
      buyer_type: clean(data.get('buyerType')),
      company_or_brand: clean(data.get('company')),
      country_or_market: clean(data.get('market')),
      contact_name: clean(data.get('contactName')),
      product_category: clean(data.get('category')),
      estimated_first_order: clean(data.get('orderSize')),
      reference_link: clean(data.get('reference')) || 'Not provided',
      requirement: clean(data.get('details')),
      language: i18n?.getLang() || 'en',
      sourcing_brief: currentBrief,
      _honey: ''
    };
    preview.textContent = currentBrief;
  };

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    buildRequest(data);
    form.hidden = true;
    result.hidden = false;
    submissionStatus.classList.remove('is-error');
    submissionStatus.textContent = '';
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  sendButton?.addEventListener('click', async () => {
    if (!currentRequest) return;

    sendButton.disabled = true;
    sendButton.textContent = t('Sending…');
    submissionStatus.classList.remove('is-error');
    submissionStatus.textContent = t('Sending your request…');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(currentRequest)
      });
      const responseData = await response.json().catch(() => ({}));
      if (!response.ok || responseData.success === false || responseData.success === 'false') {
        throw new Error('Form delivery failed');
      }

      sendButton.textContent = t('Request sent');
      submissionStatus.textContent = t('Thank you. Your sourcing request has been sent to WIGSWAN.');
      editButton.hidden = true;
    } catch (error) {
      sendButton.disabled = false;
      sendButton.textContent = t('Try sending again');
      submissionStatus.classList.add('is-error');
      submissionStatus.textContent = t('We could not send the request. Please copy the brief and email it to 48076124@qq.com.');
    }
  });

  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(currentBrief);
      submissionStatus.classList.remove('is-error');
      submissionStatus.textContent = t('Brief copied. You can paste it into your preferred email or messaging app.');
    } catch (error) {
      const range = document.createRange();
      range.selectNodeContents(preview);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      submissionStatus.classList.remove('is-error');
      submissionStatus.textContent = t('The brief is selected. Press Ctrl+C or Command+C to copy it.');
    }
  });

  editButton?.addEventListener('click', () => {
    result.hidden = true;
    form.hidden = false;
    submissionStatus.classList.remove('is-error');
    submissionStatus.textContent = '';
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  window.addEventListener('sourcing:languagechange', () => {
    closeNavigation();
    if (currentRequest) buildRequest(new FormData(form));
  });
})();
