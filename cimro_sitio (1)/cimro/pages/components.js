// ===== HEADER Y FOOTER PARA PÁGINAS INTERNAS (carpeta /pages/) =====
document.addEventListener('DOMContentLoaded', function () {

  const headerEl = document.querySelector('header');
  if (headerEl) {
    headerEl.innerHTML = `
      <nav>
        <div class="nav-logo">
          CIMRO
          <span>Constructora e Inmobiliaria</span>
        </div>
        <ul class="nav-links">
          <li><a href="../index.html">Inicio</a></li>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="programas.html">Servicios</a></li>
          <li><a href="portafolio.html">Portafolio</a></li>
          <li><a href="galeria.html">Galería</a></li>
          <li><a href="materiales.html">Materiales</a></li>
          <li><a href="garantias.html">Garantías</a></li>
          <li><a href="contacto.html">Contacto</a></li>
          <li><a href="cotizacion.html">Cotización</a></li>
          <li><a href="faq.html">FAQ</a></li>
        </ul>
        <button class="hamburger" aria-label="Abrir menú">
          <span></span><span></span><span></span>
        </button>
      </nav>
    `;
  }

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
          <a href="../index.html">Inicio</a>
          <a href="nosotros.html">Nosotros</a>
          <a href="programas.html">Servicios</a>
          <a href="portafolio.html">Portafolio</a>
          <a href="materiales.html">Materiales</a>
          <a href="garantias.html">Garantías</a>
          <a href="cotizacion.html">Cotización</a>
          <a href="contacto.html">Contacto</a>
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

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});
