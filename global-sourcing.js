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

  let currentBrief = '';
  let currentRequest = null;

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
    currentRequest = {
      _subject: `WIGSWAN sourcing request — ${clean(data.get('company'))} — ${clean(data.get('category'))}`,
      _template: 'table',
      _url: 'https://wigswan.com/global-sourcing.html',
      email: clean(data.get('email')),
      buyer_type: clean(data.get('buyerType')),
      company_or_brand: clean(data.get('company')),
      country_or_market: clean(data.get('market')),
      contact_name: clean(data.get('contactName')),
      product_category: clean(data.get('category')),
      estimated_first_order: clean(data.get('orderSize')),
      reference_link: clean(data.get('reference')) || 'Not provided',
      requirement: clean(data.get('details')),
      sourcing_brief: currentBrief,
      _honey: ''
    };
    preview.textContent = currentBrief;
    form.hidden = true;
    result.hidden = false;
    submissionStatus.classList.remove('is-error');
    submissionStatus.textContent = '';
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  sendButton?.addEventListener('click', async () => {
    if (!currentRequest) return;

    sendButton.disabled = true;
    sendButton.textContent = 'Sending…';
    submissionStatus.classList.remove('is-error');
    submissionStatus.textContent = 'Sending your request…';

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

      sendButton.textContent = 'Request sent';
      submissionStatus.textContent = 'Thank you. Your sourcing request has been sent to WIGSWAN.';
      editButton.hidden = true;
    } catch (error) {
      sendButton.disabled = false;
      sendButton.textContent = 'Try sending again';
      submissionStatus.classList.add('is-error');
      submissionStatus.textContent = 'We could not send the request. Please copy the brief and email it to 48076124@qq.com.';
    }
  });

  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(currentBrief);
      submissionStatus.classList.remove('is-error');
      submissionStatus.textContent = 'Brief copied. You can paste it into your preferred email or messaging app.';
    } catch (error) {
      const range = document.createRange();
      range.selectNodeContents(preview);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      submissionStatus.classList.remove('is-error');
      submissionStatus.textContent = 'The brief is selected. Press Ctrl+C or Command+C to copy it.';
    }
  });

  editButton?.addEventListener('click', () => {
    result.hidden = true;
    form.hidden = false;
    submissionStatus.classList.remove('is-error');
    submissionStatus.textContent = '';
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
