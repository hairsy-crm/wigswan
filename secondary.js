const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const siteHeader = document.getElementById('siteHeader');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    menuToggle.textContent = mainNav.classList.contains('open') ? '×' : '☰';
  });
}

if (siteHeader) {
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 20);
  });
}

const cooperationForm = document.getElementById('cooperationForm');

if (cooperationForm) {
  const LEAD_API_URL = 'https://wigswan-lead-api.plotworld-cn.workers.dev';
  const guideTitle = document.getElementById('guideTitle');
  const guideList = document.getElementById('guideList');
  const description = document.getElementById('description');
  const descriptionCount = document.getElementById('descriptionCount');
  const result = document.getElementById('formResult');
  const submitButton = document.getElementById('submitLead');

  const guideContent = {
    wig_store: {
      title: '假发店将填写的信息',
      items: [
        ['◈', '主营业务', '选择当前主要经营项目'],
        ['▣', '接待能力', '确认线下服务与预约条件'],
        ['◎', '可承接服务', '说明可配合平台完成的服务'],
        ['▤', '合作匹配', '平台按城市与能力匹配订单'],
        ['☑', '门店简介', '介绍门店特色与合作优势']
      ]
    },
    salon: {
      title: '理发店将填写的信息',
      items: [
        ['◈', '门店类型', '选择最贴近的理发店形态'],
        ['▣', '合作意向', '确认承接、转介或先了解'],
        ['◎', '客户经验', '说明是否遇到假发 / 补发客户'],
        ['▤', '可合作方式', '选择转介、服务点或联合获客'],
        ['☑', '门店简介', '说明门店基础与增长诉求']
      ]
    }
  };

  const renderGuide = (type) => {
    if (!guideTitle || !guideList) return;
    const data = guideContent[type] || guideContent.wig_store;
    guideTitle.textContent = data.title;
    guideList.innerHTML = data.items.map(([icon, title, desc]) => (
      `<article><span>${icon}</span><div><strong>${title}</strong><small>${desc}</small></div></article>`
    )).join('');
  };

  const getPartnerType = () => {
    const checked = cooperationForm.querySelector('input[name="partnerType"]:checked');
    return checked ? checked.value : 'wig_store';
  };

  const setPartnerType = (type) => {
    cooperationForm.querySelectorAll('[data-partner-section]').forEach((section) => {
      const active = section.dataset.partnerSection === type;
      section.hidden = !active;
      section.classList.toggle('is-active', active);
    });
    renderGuide(type);
    clearErrors();
    setResult('');
  };

  const getValue = (name) => {
    const field = cooperationForm.elements[name];
    return field ? field.value.trim() : '';
  };

  const getRadioValue = (name) => {
    const checked = cooperationForm.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : '';
  };

  const getCheckedValues = (name) => (
    Array.from(cooperationForm.querySelectorAll(`input[name="${name}"]:checked`)).map((item) => item.value)
  );

  const setResult = (message, type = '') => {
    if (!result) return;
    result.textContent = message;
    result.classList.toggle('is-success', type === 'success');
    result.classList.toggle('is-error', type === 'error');
  };

  function clearErrors() {
    cooperationForm.querySelectorAll('.field-error').forEach((node) => {
      node.textContent = '';
    });
    cooperationForm.querySelectorAll('.has-error').forEach((node) => {
      node.classList.remove('has-error');
    });
  }

  const setError = (name, message) => {
    const error = cooperationForm.querySelector(`[data-error-for="${name}"]`);
    if (error) error.textContent = message;
    const field = cooperationForm.elements[name];
    const block = cooperationForm.querySelector(`[data-field-block="${name}"]`);
    if (field && field.closest) field.closest('.field')?.classList.add('has-error');
    if (block) block.classList.add('has-error');
  };

  const focusField = (name) => {
    const field = cooperationForm.elements[name];
    const target = field?.length ? Array.from(field).find((item) => !item.closest('[hidden]')) : field;
    if (target?.focus) target.focus();
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const validateForm = () => {
    clearErrors();
    const errors = [];
    const addError = (name, message) => {
      errors.push(name);
      setError(name, message);
    };

    if (!getValue('storeName')) addError('storeName', '请输入门店名称');
    if (!getValue('city')) addError('city', '请输入所在城市 / 区域');
    if (!getValue('contactName')) addError('contactName', '请输入联系人姓名');
    if (!getValue('contact')) addError('contact', '请输入手机号或微信号');
    if (getValue('description').length > 300) addError('description', '门店简介最多300字');

    const partnerType = getPartnerType();
    if (partnerType === 'wig_store') {
      if (getCheckedValues('mainBusiness').length === 0) addError('mainBusiness', '请至少选择1项主营业务');
      if (!getRadioValue('receptionAbility')) addError('receptionAbility', '请选择线下接待能力');
      if (getCheckedValues('services').length === 0) addError('services', '请至少选择1项可承接服务');
    } else {
      if (!getRadioValue('salonType')) addError('salonType', '请选择理发店类型');
      if (!getRadioValue('cooperationIntent')) addError('cooperationIntent', '请选择合作意向');
      if (!getRadioValue('wigCustomerExperience')) addError('wigCustomerExperience', '请选择是否接触过假发客户');
      if (getCheckedValues('cooperationMethods').length === 0) addError('cooperationMethods', '请至少选择1项可合作方式');
    }

    if (errors.length > 0) focusField(errors[0]);
    return errors.length === 0;
  };

  const buildPayload = () => {
    const partnerType = getPartnerType();
    const partnerTypeLabel = partnerType === 'wig_store' ? '假发店' : '理发店';
    const contactName = getValue('contactName');
    const contact = getValue('contact');

    return {
      source: 'wigswan_partner_form',
      partnerType,
      partnerTypeLabel,

      storeName: getValue('storeName'),
      city: getValue('city'),
      contactName,
      contact,

      name: contactName,
      phone: contact,
      demandType: partnerTypeLabel,

      mainBusiness: getCheckedValues('mainBusiness'),
      receptionAbility: getRadioValue('receptionAbility'),
      services: getCheckedValues('services'),

      salonType: getRadioValue('salonType'),
      cooperationIntent: getRadioValue('cooperationIntent'),
      wigCustomerExperience: getRadioValue('wigCustomerExperience'),
      cooperationMethods: getCheckedValues('cooperationMethods'),

      description: getValue('description'),
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString()
    };
  };

  cooperationForm.querySelectorAll('input[name="partnerType"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      setPartnerType(radio.value);
    });
  });

  cooperationForm.querySelectorAll('input, textarea').forEach((field) => {
    field.addEventListener('input', () => {
      setResult('');
    });
  });

  if (description && descriptionCount) {
    description.addEventListener('input', () => {
      descriptionCount.textContent = description.value.length;
    });
  }

  cooperationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    setResult('');
    if (!validateForm()) return;

    const payload = buildPayload();
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = '提交中...';
    }

    try {
      const response = await fetch(LEAD_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`Lead API ${response.status}`);
      if (submitButton) submitButton.textContent = '提交成功';
      setResult('提交成功，我们已收到您的合作申请，会根据您的城市和门店情况尽快联系您。', 'success');
    } catch (error) {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = '提交合作申请';
      }
      setResult('提交失败，请稍后重试，或通过页面右侧联系方式联系我们。', 'error');
    }
  });

  setPartnerType(getPartnerType());
}
