// ===== INYECTAR HEADER Y FOOTER EN TODAS LAS PÁGINAS =====
document.addEventListener('DOMContentLoaded', function () {

  // ---- HEADER ----
  const headerEl = document.querySelector('header');
  if (headerEl) {
    headerEl.innerHTML = `
      <nav>
        <div class="nav-logo">
          CIMRO
          <span>Constructora e Inmobiliaria</span>
        </div>
        <ul class="nav-links">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="pages/nosotros.html">Nosotros</a></li>
          <li><a href="pages/programas.html">Servicios</a></li>
          <li><a href="pages/portafolio.html">Portafolio</a></li>
          <li><a href="pages/galeria.html">Galería</a></li>
          <li><a href="pages/materiales.html">Materiales</a></li>
          <li><a href="pages/garantias.html">Garantías</a></li>
          <li><a href="pages/contacto.html">Contacto</a></li>
          <li><a href="pages/cotizacion.html">Cotización</a></li>
          <li><a href="pages/faq.html">FAQ</a></li>
        </ul>
        <button class="hamburger" aria-label="Abrir menú">
          <span></span><span></span><span></span>
        </button>
      </nav>
    `;
  }

  // ---- FOOTER ----
  const footerEl = document.querySelector('footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="footer-grid">
        <div class="footer-col">
          <h4>CIMRO</h4>
          <p>Constructora e Inmobiliaria Rodríguez. Servicios profesionales en construcción desde 2010.</p>
        </div>
        <div class="footer-col">
          <h4>Navegación</h4>
          <a href="index.html">Inicio</a>
          <a href="pages/nosotros.html">Nosotros</a>
          <a href="pages/programas.html">Servicios</a>
          <a href="pages/portafolio.html">Portafolio</a>
          <a href="pages/materiales.html">Materiales</a>
          <a href="pages/garantias.html">Garantías</a>
          <a href="pages/cotizacion.html">Cotización</a>
          <a href="pages/contacto.html">Contacto</a>
        </div>
        <div class="footer-col">
          <h4>Contacto</h4>
          <p>📞 +504 8952-8094</p>
          <p>📞 3141-0110</p>
          <p>✉️ Jbrodri07@gmail.com</p>
          <p>📍 Municipio Tatumbla, aldea Cofradía</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 CIMRO — Constructora e Inmobiliaria Rodríguez. Todos los derechos reservados.</p>
      </div>
    `;
  }

  // Re-inicializar hamburger después de inyectar
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // Marcar página activa
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
