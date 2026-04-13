const planICC = {
  "Codigo": "IF01001",
  "Carrera": "Ingeniería en Ciencias de la Computación",
  "Bloques": [
    {
      "Bloque": "I",
      "Materias": [
        { "Codigo": "MT101", "Nombre": "Matemáticas",       "Creditos": 4, "Prereqs": [] },
        { "Codigo": "ES101", "Nombre": "Español",           "Creditos": 3, "Prereqs": [] },
        { "Codigo": "SC101", "Nombre": "Sociología",        "Creditos": 3, "Prereqs": [] },
        { "Codigo": "FI101", "Nombre": "Filosofía",         "Creditos": 3, "Prereqs": [] },
        { "Codigo": "IF112", "Nombre": "Introducción a CC", "Creditos": 3, "Prereqs": [] }
      ]
    },
    {
      "Bloque": "II",
      "Materias": [
        { "Codigo": "ES201", "Nombre": "Expresión Oral y Escrita",             "Creditos": 3, "Prereqs": ["ES101"] },
        { "Codigo": "MT201", "Nombre": "Pre Cálculo",                          "Creditos": 4, "Prereqs": ["MT101"] },
        { "Codigo": "IF200", "Nombre": "Fundamentos y Lógica de Programación", "Creditos": 4, "Prereqs": ["IF112"] },
        { "Codigo": "HS101", "Nombre": "Historia de Honduras",                 "Creditos": 3, "Prereqs": [] },
        { "Codigo": "CR201", "Nombre": "El Hombre Frente a la Vida",           "Creditos": 3, "Prereqs": [] }
      ]
    },
    {
      "Bloque": "III",
      "Materias": [
        { "Codigo": "MT301", "Nombre": "Estadística I",               "Creditos": 4, "Prereqs": ["MT201"] },
        { "Codigo": "MT302", "Nombre": "Cálculo I",                   "Creditos": 4, "Prereqs": ["MT201"] },
        { "Codigo": "IF301", "Nombre": "Programación Estructurada I", "Creditos": 3, "Prereqs": ["IF200"] },
        { "Codigo": "MT303", "Nombre": "Estructuras Discretas",       "Creditos": 3, "Prereqs": ["MT201"] },
        { "Codigo": "CN301", "Nombre": "Electiva I (Cs. Naturales)",  "Creditos": 3, "Prereqs": [] }
      ]
    },
    {
      "Bloque": "IV",
      "Materias": [
        { "Codigo": "MT401", "Nombre": "Métodos y Técnicas de Investigación", "Creditos": 3, "Prereqs": [] },
        { "Codigo": "MT402", "Nombre": "Cálculo II",                          "Creditos": 4, "Prereqs": ["MT302"] },
        { "Codigo": "IF401", "Nombre": "Programación Estructurada II",        "Creditos": 3, "Prereqs": ["IF301"] },
        { "Codigo": "FI401", "Nombre": "Física I",                            "Creditos": 3, "Prereqs": ["MT302"] },
        { "Codigo": "AD401", "Nombre": "Administración",                      "Creditos": 3, "Prereqs": [] }
      ]
    },
    {
      "Bloque": "V",
      "Materias": [
        { "Codigo": "IF501", "Nombre": "Base de Datos I",                               "Creditos": 3, "Prereqs": ["IF401"], "PctMinimo": 30 },
        { "Codigo": "CN501", "Nombre": "Contabilidad",                                  "Creditos": 3, "Prereqs": [],        "PctMinimo": 30 },
        { "Codigo": "IF502", "Nombre": "Programación en Entornos de Desarrollo Visual", "Creditos": 3, "Prereqs": ["IF401"] },
        { "Codigo": "EL501", "Nombre": "Principios de Electrónica",                     "Creditos": 3, "Prereqs": ["FI401"] },
        { "Codigo": "MT501", "Nombre": "Matemáticas Financiera",                        "Creditos": 3, "Prereqs": ["MT201"] }
      ]
    },
    {
      "Bloque": "VI",
      "Materias": [
        { "Codigo": "IF601", "Nombre": "Base de Datos II",             "Creditos": 3, "Prereqs": ["IF501"] },
        { "Codigo": "IF602", "Nombre": "Análisis y Diseño de Sistemas","Creditos": 4, "Prereqs": ["IF502"], "PctMinimo": 40 },
        { "Codigo": "IF603", "Nombre": "Redes I",                      "Creditos": 4, "Prereqs": ["IF502"], "PctMinimo": 40 },
        { "Codigo": "EL601", "Nombre": "Circuitos Lógicos",            "Creditos": 3, "Prereqs": ["EL501"] },
        { "Codigo": "ET601", "Nombre": "Ética Profesional",            "Creditos": 3, "Prereqs": [] }
      ]
    },
    {
      "Bloque": "VII",
      "Materias": [
        { "Codigo": "IF701", "Nombre": "Base de Datos Multidimensional","Creditos": 3, "Prereqs": ["IF601"], "PctMinimo": 50 },
        { "Codigo": "IF702", "Nombre": "Programación Multiplataforma",  "Creditos": 3, "Prereqs": ["IF602"], "PctMinimo": 50 },
        { "Codigo": "IF703", "Nombre": "Desarrollo de Software",        "Creditos": 4, "Prereqs": ["IF602"] },
        { "Codigo": "IF704", "Nombre": "Redes II",                      "Creditos": 4, "Prereqs": ["IF603"] },
        { "Codigo": "IF705", "Nombre": "Sistemas Automatizados",        "Creditos": 3, "Prereqs": ["EL601"] }
      ]
    },
    {
      "Bloque": "VIII",
      "Materias": [
        { "Codigo": "IF801", "Nombre": "Sistemas Inteligentes para Negocios",   "Creditos": 3, "Prereqs": ["IF701"] },
        { "Codigo": "DE801", "Nombre": "Electiva II (Arte o Deporte)",           "Creditos": 3, "Prereqs": [] },
        { "Codigo": "IF802", "Nombre": "Implementación de Sistemas de Software", "Creditos": 3, "Prereqs": ["IF703"] },
        { "Codigo": "IF803", "Nombre": "Sistemas Operativos I",                  "Creditos": 3, "Prereqs": ["IF704"], "PctMinimo": 60 },
        { "Codigo": "EL801", "Nombre": "Microcontroladores",                     "Creditos": 3, "Prereqs": ["IF705"], "PctMinimo": 60 }
      ]
    },
    {
      "Bloque": "IX",
      "Materias": [
        { "Codigo": "IF901", "Nombre": "Desarrollo de Portales Web I",     "Creditos": 3, "Prereqs": ["IF802"] },
        { "Codigo": "IF902", "Nombre": "Programación Móvil I",             "Creditos": 3, "Prereqs": ["IF802"], "PctMinimo": 60 },
        { "Codigo": "AD901", "Nombre": "Gestión de la Calidad Total",      "Creditos": 3, "Prereqs": ["IF802"], "PctMinimo": 60 },
        { "Codigo": "IF903", "Nombre": "Sistemas Operativos II",           "Creditos": 3, "Prereqs": ["IF803"] },
        { "Codigo": "HW901", "Nombre": "Seminario de Hardware y Electricidad","Creditos": 3, "Prereqs": ["EL801"] }
      ]
    },
    {
      "Bloque": "X",
      "Materias": [
        { "Codigo": "IF1001", "Nombre": "Desarrollo de Portales Web II",        "Creditos": 3, "Prereqs": ["IF901"] },
        { "Codigo": "IF1002", "Nombre": "Programación Móvil II",                "Creditos": 3, "Prereqs": ["IF902"] },
        { "Codigo": "AD1001", "Nombre": "Control Estadístico de la Calidad",    "Creditos": 3, "Prereqs": ["AD901"] },
        { "Codigo": "SE1001", "Nombre": "Gestión y Estándares de TI",           "Creditos": 3, "Prereqs": ["IF903"], "PctMinimo": 70 },
        { "Codigo": "DS1001", "Nombre": "Doctrina Social de la Iglesia",        "Creditos": 3, "Prereqs": [] }
      ]
    },
    {
      "Bloque": "XI",
      "Materias": [
        { "Codigo": "IF1101", "Nombre": "Negocios Web",                               "Creditos": 3, "Prereqs": ["IF1001"] },
        { "Codigo": "IF1102", "Nombre": "Programación de Negocios",                   "Creditos": 3, "Prereqs": ["IF1002"], "PctMinimo": 80 },
        { "Codigo": "AD1101", "Nombre": "Planeación y Diseño de Modelo de Calidad",   "Creditos": 3, "Prereqs": ["AD1001"] },
        { "Codigo": "SE1101", "Nombre": "Seguridad Informática y Gestión del Riesgo", "Creditos": 3, "Prereqs": ["SE1001"] },
        { "Codigo": "HW1101", "Nombre": "Administración de Centros de Cómputo",       "Creditos": 3, "Prereqs": ["HW901"] }
      ]
    },
    {
      "Bloque": "XII",
      "Materias": [
        { "Codigo": "IF1201", "Nombre": "Seminario Taller de Software",        "Creditos": 3, "Prereqs": ["IF1101"] },
        { "Codigo": "AD1201", "Nombre": "Gestión de Proyectos Informáticos",   "Creditos": 3, "Prereqs": ["AD1101", "IF1102"] },
        { "Codigo": "BD1201", "Nombre": "Big Data",                            "Creditos": 3, "Prereqs": ["IF701", "SE1001"] },
        { "Codigo": "SE1201", "Nombre": "Auditoría de Sistemas de Información","Creditos": 3, "Prereqs": ["SE1101"] },
        { "Codigo": "EL1201", "Nombre": "Electiva III (Área Especializada)",   "Creditos": 3, "Prereqs": [] }
      ]
    }
  ]
};

// ── Estado ────────────────────────────────────────────────────────────────────
const aprobadas = new Set();

function totalCreditos() {
  return planICC.Bloques.reduce((t, b) =>
    t + b.Materias.reduce((s, m) => s + m.Creditos, 0), 0);
}

function creditosAprobados() {
  return planICC.Bloques.reduce((t, b) =>
    t + b.Materias.reduce((s, m) => s + (aprobadas.has(m.Codigo) ? m.Creditos : 0), 0), 0);
}

function porcentajeAprobado() {
  return Math.round((creditosAprobados() / totalCreditos()) * 100);
}

function buscarMateria(codigo) {
  for (const b of planICC.Bloques)
    for (const m of b.Materias)
      if (m.Codigo === codigo) return m;
  return null;
}

function getEstado(codigo) {
  if (aprobadas.has(codigo)) return "approved";
  const m = buscarMateria(codigo);
  if (!m) return "locked";
  const prereqsMet = m.Prereqs.every(p => aprobadas.has(p));
  const pctMet = !m.PctMinimo || porcentajeAprobado() >= m.PctMinimo;
  return prereqsMet && pctMet ? "available" : "locked";
}

// ── Render ────────────────────────────────────────────────────────────────────
function render() {
  document.getElementById("titulo").textContent =
    `${planICC.Codigo} - ${planICC.Carrera}`;

  const pct = porcentajeAprobado();
  document.getElementById("progress-text").textContent =
    `Progreso: ${creditosAprobados()} / ${totalCreditos()} créditos (${pct}%)`;
  document.getElementById("progress-bar").style.width = pct + "%";

  const container = document.getElementById("plan");
  container.innerHTML = "";

  for (const bloque of planICC.Bloques) {
    const row = document.createElement("div");
    row.className = "bloque-row";

    const label = document.createElement("div");
    label.className = "bloque-label";
    label.textContent = bloque.Bloque;
    row.appendChild(label);

    const materiasDiv = document.createElement("div");
    materiasDiv.className = "materias";

    for (const m of bloque.Materias) {
      const estado = getEstado(m.Codigo);
      const el = document.createElement("div");
      el.className = "materia " + estado;
      el.dataset.codigo = m.Codigo;
      el.innerHTML = `
        <span class="lock-icon">🔒</span>
        <div class="mat-codigo">${m.Codigo}</div>
        <div class="mat-nombre">${m.Nombre}</div>
        <div class="mat-creditos">${m.Creditos} créditos</div>
      `;
      el.addEventListener("click",      () => handleClick(m.Codigo));
      el.addEventListener("mouseenter", (e) => showTooltip(e, m));
      el.addEventListener("mousemove",  (e) => moveTooltip(e));
      el.addEventListener("mouseleave", hideTooltip);
      materiasDiv.appendChild(el);
    }

    row.appendChild(materiasDiv);
    container.appendChild(row);
  }
}

// ── Interacción ───────────────────────────────────────────────────────────────
function handleClick(codigo) {
  const estado = getEstado(codigo);
  if (estado === "locked") { sacudir(codigo); return; }
  if (estado === "approved") {
    aprobadas.delete(codigo);
    quitarDependientes();
  } else {
    aprobadas.add(codigo);
    flashDesbloqueadas();
  }
  render();
}

function quitarDependientes() {
  let cambio = true;
  while (cambio) {
    cambio = false;
    for (const codigo of [...aprobadas]) {
      const m = buscarMateria(codigo);
      if (m && m.Prereqs.some(p => !aprobadas.has(p))) {
        aprobadas.delete(codigo);
        cambio = true;
      }
    }
  }
}

function flashDesbloqueadas() {
  setTimeout(() => {
    for (const b of planICC.Bloques)
      for (const m of b.Materias)
        if (!aprobadas.has(m.Codigo) && getEstado(m.Codigo) === "available") {
          const el = document.querySelector(`[data-codigo="${m.Codigo}"]`);
          if (el) { el.classList.add("flash"); setTimeout(() => el.classList.remove("flash"), 900); }
        }
  }, 30);
}

function sacudir(codigo) {
  const el = document.querySelector(`[data-codigo="${codigo}"]`);
  if (!el) return;
  const pasos = [5, -5, 4, -4, 2, -2, 0];
  let i = 0;
  const animar = () => {
    if (i >= pasos.length) { el.style.transform = ""; return; }
    el.style.transform = `translateX(${pasos[i++]}px)`;
    setTimeout(animar, 45);
  };
  animar();
}

// ── Tooltip ───────────────────────────────────────────────────────────────────
const tooltipEl = document.getElementById("tooltip");

function showTooltip(e, m) {
  const estado = getEstado(m.Codigo);
  let html = `<strong>${m.Codigo}</strong> — ${m.Nombre}<br>${m.Creditos} créditos`;
  if (estado === "locked") {
    const faltantes = m.Prereqs.filter(p => !aprobadas.has(p));
    if (faltantes.length) html += `<br><br>⛔ Requiere: ${faltantes.join(", ")}`;
    if (m.PctMinimo) html += `<br>📊 Avance mínimo: ${m.PctMinimo}% (llevas ${porcentajeAprobado()}%)`;
  } else if (estado === "approved") {
    html += "<br><br>✓ Aprobada · clic para desmarcar";
  } else {
    html += "<br><br>✅ Disponible para cursar";
  }
  tooltipEl.innerHTML = html;
  tooltipEl.style.display = "block";
  moveTooltip(e);
}

function moveTooltip(e) {
  tooltipEl.style.left = (e.clientX + 14) + "px";
  tooltipEl.style.top  = (e.clientY + 14) + "px";
}

function hideTooltip() { tooltipEl.style.display = "none"; }

// ── Inicio ────────────────────────────────────────────────────────────────────
render();