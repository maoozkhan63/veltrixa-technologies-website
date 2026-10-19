const CONFIG = Object.freeze({
  email: 'maoozkhan2163@gmail.com',
  phone: '+923084257110',
  whatsappEnabled: false,
  whatsappNumber: '+923084257110',
  fiverrUrl: ''
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open');
    }));
  }

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    reveals.forEach(element => observer.observe(element));
  } else reveals.forEach(element => element.classList.add('visible'));

  const whatsapp = document.querySelector('#whatsapp-link');
  if (whatsapp && CONFIG.whatsappEnabled) { whatsapp.href = `https://wa.me/${CONFIG.whatsappNumber.replace(/\D/g, '')}`; whatsapp.hidden = false; }
  const fiverr = document.querySelector('#fiverr-link');
  if (fiverr && CONFIG.fiverrUrl) { fiverr.href = CONFIG.fiverrUrl; fiverr.hidden = false; }

  const form = document.querySelector('#inquiry-form');
  if (form) {
    const service = document.querySelector('#service');
    const queryService = new URLSearchParams(window.location.search).get('service');
    if (queryService && [...service.options].some(option => option.text === queryService)) service.value = queryService;
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = document.querySelector('#form-status');
      if (!form.checkValidity()) { form.reportValidity(); status.textContent = 'Please complete the required fields above.'; status.className = 'form-status error'; return; }
      const data = new FormData(form);
      const subject = `Project inquiry from ${data.get('name')}`;
      const body = [`Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Service: ${data.get('service')}`, `Budget: ${data.get('budget') || 'Not specified'}`, '', 'Project description:', data.get('description')].join('\n');
      window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Your email application should open with a prepared draft. Please press send there.'; status.className = 'form-status success';
    });
  }
});
