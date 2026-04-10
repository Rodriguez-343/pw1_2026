// ===== NAVBAR HAMBURGER =====
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // Marcar enlace activo
  const currentPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// ===== FAQ ACCORDION =====
function initFaq() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        item.classList.toggle('open');
      });
    }
  });
}

// ===== FORM VALIDATION =====
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const required = form.querySelectorAll('[required]');
    required.forEach(function (field) {
      const errEl = document.getElementById(field.id + '-error');
      if (!field.value.trim()) {
        if (errEl) errEl.style.display = 'block';
        field.style.borderColor = '#c0392b';
        valid = false;
      } else {
        if (errEl) errEl.style.display = 'none';
        field.style.borderColor = '';
      }
    });

    // Validar email
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const errEl = document.getElementById(emailField.id + '-error');
      if (!emailRegex.test(emailField.value)) {
        if (errEl) {
          errEl.textContent = 'Ingrese un correo válido.';
          errEl.style.display = 'block';
        }
        emailField.style.borderColor = '#c0392b';
        valid = false;
      }
    }

    if (valid) {
      const successEl = form.querySelector('.success-msg');
      if (successEl) {
        form.reset();
        successEl.style.display = 'block';
        setTimeout(function () {
          successEl.style.display = 'none';
        }, 4000);
      }
    }
  });
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.number[data-target]');
  counters.forEach(function (counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(function () {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = current + (counter.getAttribute('data-suffix') || '');
    }, 25);
  });
}

// Activar contadores cuando son visibles
function initCounters() {
  const statsBar = document.querySelector('.stats-bar');
  if (!statsBar) return;
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });
  observer.observe(statsBar);
}
