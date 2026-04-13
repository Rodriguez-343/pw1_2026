const planicc = {
    "codigo": "IF01001",
    "carrera": "Ingeniería en Ciencias de la Computación",
    bloques: [
    {
        bloque: "I",
        asignaturas: [
            {
                codigo: "ES101",
                nombre: "Español",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "MT101",
                nombre: "Matemáticas",
                creditos: 4,
                requisitos: []
            },
            {
                codigo: "IF112",
                nombre: "Introducción a las Ciencias de la Computación",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "SC101",
                nombre: "Sociología",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "FI101",
                nombre: "Filosofía",
                creditos: 3,
                requisitos: []
            }
        ]
    },
    {
        bloque: "II",
        asignaturas: [
            {
                codigo: "ES201",
                nombre: "Expresión Oral y Escrita",
                creditos: 3,
                requisitos: ["ES101"]
            },
            {
                codigo: "MT201",
                nombre: "Pre Cálculo",
                creditos: 4,
                requisitos: ["MT101"]
            },
            {
                codigo: "IF200",
                nombre: "Fundamentos y Lógica de Programación",
                creditos: 4,
                requisitos: ["IF112"]
            },
            {
                codigo: "HS101",
                nombre: "Historia de Honduras",
                creditos: 3,
                requisitos: ["SC101"]
            },
            {
                codigo: "CR201",
                nombre: "El Hombre Frente a la Vida",
                creditos: 3,
                requisitos: ["FI101"]
            }
        ]
    },
    {
        bloque: "III",
        asignaturas: [
            {
                codigo: "MT202",
                nombre: "Estadística I",
                creditos: 4,
                requisitos: []
            },
            {
                codigo: "MT303",
                nombre: "Cálculo I",
                creditos: 4,
                requisitos: ["MT201"]
            },
            {
                codigo: "IF214",
                nombre: "Programación Estructurada I",
                creditos: 3,
                requisitos: ["IF200"]
            },
            {
                codigo: "IF213",
                nombre: "Estructuras Discretas",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "IF394",
                nombre: "Diseño Gráfico",
                creditos: 3,
                requisitos: []
            }
        ]
    },
    {
        bloque: "IV",
        asignaturas: [
            {
                codigo: "AD302",
                nombre: "Métodos y Técnicas de Investigación",
                creditos: 3,
                requisitos: ["MT202"]
            },
            {
                codigo: "MT401",
                nombre: "Cálculo II",
                creditos: 4,
                requisitos: ["MT303"]
            },
            {
                codigo: "IF303",
                nombre: "Programación Estructurada II",
                creditos: 3,
                requisitos: ["IF214"]
            },
            {
                codigo: "FS201",
                nombre: "Física I",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "AD101",
                nombre: "Administración",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "CNFS1",
                nombre: "Laboratorio de Física I",
                creditos: 3,
                requisitos: []
            }
        ]
    },
    {
        bloque: "V",
        asignaturas: [
            {
                codigo: "IF322",
                nombre: "Base de Datos I",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "CT201",
                nombre: "Contabilidad",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "IF325",
                nombre: "Programación en Entornos de Desarrollo Visual",
                creditos: 3,
                requisitos: ["IF303"]
            },
            {
                codigo: "IF319",
                nombre: "Principios de Electrónica",
                creditos: 3,
                requisitos: ["FS201"]
            },
            {
                codigo: "MT204",
                nombre: "Matemáticas Financiera",
                creditos: 3,
                requisitos: []
            }
        ]
    },
    {
        bloque: "VI",
        asignaturas: [
            {
                codigo: "IF327",
                nombre: "Bases de Datos II",
                creditos: 3,
                requisitos: ["IF322"]
            },
            {
                codigo: "FI501",
                nombre: "Ética Profesional",
                creditos: 3,
                requisitos: ["CR201"]
            },
            {
                codigo: "IF212",
                nombre: "Análisis y Diseño de Sistemas",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "IF323",
                nombre: "Redes I",
                creditos: 4,
                requisitos: []
            },
            {
                codigo: "IF324",
                nombre: "Circuitos Lógicos",
                creditos: 3,
                requisitos: ["IF319"]
            },
            {
                codigo: "ESVU2",
                nombre: "Seminario de Madurez en la Vida Universitaria",
                creditos: 1,
                requisitos: []
            }
        ]
    },
    {
        bloque: "VII",
        asignaturas: [
            {
                codigo: "IF342",
                nombre: "Bases de Datos Multidimensional",
                creditos: 3,
                requisitos: ["IF327"]
            },
            {
                codigo: "IF340",
                nombre: "Programación Multiplataforma",
                creditos: 3,
                requisitos: ["IF325"]
            },
            {
                codigo: "IF314",
                nombre: "Desarrollo de Software",
                creditos: 4,
                requisitos: ["IF212"]
            },
            {
                codigo: "IF328",
                nombre: "Redes II",
                creditos: 4,
                requisitos: ["IF323"]
            },
            {
                codigo: "IF329",
                nombre: "Sistemas Automatizados",
                creditos: 3,
                requisitos: ["IF324"]
            }
        ]
    },
    {
        bloque: "VIII",
        asignaturas: [
            {
                codigo: "IF391",
                nombre: "Sistemas Inteligentes para Negocios",
                creditos: 3,
                requisitos: ["IF342"]
            },
            {
                codigo: "IF346",
                nombre: "Implementación de Sistemas de Software",
                creditos: 4,
                requisitos: ["IF314"]
            },
            {
                codigo: "IF345",
                nombre: "Sistemas Operativos I",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "IF370",
                nombre: "Microcontroladores",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "BG205",
                nombre: "Ecología",
                creditos: 3,
                requisitos: []
            }
        ]
    },
    {
        bloque: "IX",
        asignaturas: [
            {
                codigo: "IF353",
                nombre: "Desarrollo de Portales Web I",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "IF351",
                nombre: "Programación Móvil I",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "AD104",
                nombre: "Gestión de la Calidad Total",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "IF352",
                nombre: "Sistemas Operativos II",
                creditos: 3,
                requisitos: ["IF345"]
            },
            {
                codigo: "IF381",
                nombre: "Seminario de Hardware y Electricidad",
                creditos: 3,
                requisitos: ["IF370"]
            }
        ]
    },
    {
        bloque: "X",
        asignaturas: [
            {
                codigo: "IF357",
                nombre: "Desarrollo de Portales Web II",
                creditos: 3,
                requisitos: ["IF353"]
            },
            {
                codigo: "IF355",
                nombre: "Programación Móvil II",
                creditos: 3,
                requisitos: ["IF351"]
            },
            {
                codigo: "MT304",
                nombre: "Control Estadístico de la Calidad",
                creditos: 3,
                requisitos: ["AD104"]
            },
            {
                codigo: "IF356",
                nombre: "Gestión y Estándares de Tecnología de Información",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "CR501",
                nombre: "Doctrina Social de la Iglesia",
                creditos: 3,
                requisitos: ["FI501"]
            },
            {
                codigo: "ESVU3",
                nombre: "Seminario de Preparación a la Vida Profesional",
                creditos: 1,
                requisitos: []
            }
        ]
    },
    {
        bloque: "XI",
        asignaturas: [
            {
                codigo: "IF362",
                nombre: "Negocios Web",
                creditos: 3,
                requisitos: ["IF357"]
            },
            {
                codigo: "IF347",
                nombre: "Programación de Negocios",
                creditos: 3,
                requisitos: []
            },
            {
                codigo: "AD402",
                nombre: "Planeación y Diseño de un Modelo de Calidad",
                creditos: 3,
                requisitos: ["MT304"]
            },
            {
                codigo: "IF360",
                nombre: "Seguridad Informática y Gestión de Riesgo",
                creditos: 3,
                requisitos: ["IF356"]
            },
            {
                codigo: "IF358",
                nombre: "Administración de Centros de Cómputo",
                creditos: 3,
                requisitos: ["IF356"]
            },
            {
                codigo: "FMTS1",
                nombre: "Trabajo Educativo Social",
                creditos: 2,
                requisitos: []
            }
        ]
    },
    {
        bloque: "XII",
        asignaturas: [
            {
                codigo: "IF361",
                nombre: "Seminario-Taller de Software",
                creditos: 3,
                requisitos: ["IF362"]
            },
            {
                codigo: "IF392",
                nombre: "Gestión de Proyectos Informáticos",
                creditos: 3,
                requisitos: ["IF347"]
            },
            {
                codigo: "IF350",
                nombre: "Big Data",
                creditos: 3,
                requisitos: ["IF391"]
            },
            {
                codigo: "IF380",
                nombre: "Auditoría de Sistemas de Información",
                creditos: 3,
                requisitos: ["IF360"]
            },
            {
                codigo: "IF393",
                nombre: "Excel Avanzado para Ingeniería",
                creditos: 3,
                requisitos: []
            }
        ]
    },
    {
        bloque: "XIII",
        asignaturas: [
            {
                codigo: "IF400",
                nombre: "Práctica Profesional Supervisada"
            }
        ]
    }
],

};

document.addEventListener("DOMContentLoaded", () => {
    const flujoGrama = new FlujoGrama("planflujo", planicc);
    flujoGrama.GenerateUX();
});

class FlujoGrama {
    constructor(rootId, plan) {
        this.plan = plan;
        this.root = document.getElementById(rootId);
        this.root.classList.add("plan");
        this.pseudoDom = {};
        this.selected = null;
    }
    GenerateUX() {
        this.createHeader();
        this.createBloques();
    }

    createHeader() {
        let header = document.createElement("H2");
        header.classList.add("plan_header");
        header.innerText = `${this.plan.codigo} - ${this.plan.carrera}`;
        this.root.appendChild(header);
    }
    createBloques() {

        this.plan.bloques.forEach((blq) => {
            let bloque = document.createElement("SECTION");
            bloque.classList.add("plan_bloque");
            let bloqueIndice = document.createElement("DIV");
            let bloqueAsignaturas = document.createElement("DIV");

            bloqueIndice.classList.add("plan_bloque_idx");
            bloqueAsignaturas.classList.add("plan_bloque_asig");

            bloqueIndice.innerText = blq.bloque;

            bloque.appendChild(bloqueIndice);
            bloque.appendChild(bloqueAsignaturas);
            this.createAsignaturas(bloqueAsignaturas, blq);
            this.root.appendChild(bloque);
        });
    }

    createAsignaturas(bloqueDOM, blqDef) {
        blqDef.asignaturas.forEach((asg) => {
            let asignaturaDOM = document.createElement("DIV");
            asignaturaDOM.classList.add("plan_asignatura");
            let codigoDom = document.createElement("DIV");
            codigoDom.innerText = asg.codigo;
            let descripcionDom = document.createElement("DIV");
            descripcionDom.innerText = `${asg.nombre} (${asg.creditos})`;
            asignaturaDOM.appendChild(codigoDom);
            asignaturaDOM.appendChild(descripcionDom);
            bloqueDOM.appendChild(asignaturaDOM);
            // Agregar
            this.pseudoDom[asg.codigo] = {};
            this.pseudoDom[asg.codigo]["nodo"] = asignaturaDOM;
            this.pseudoDom[asg.codigo]["requisitos"] = [];
            this.pseudoDom[asg.codigo]["apertura"] = [];
            asg.requisitos.forEach(rq => {
                this.pseudoDom[asg.codigo]["requisitos"].push(
                    this.pseudoDom[rq].nodo
                );
                this.pseudoDom[rq].apertura.push(
                    this.pseudoDom[asg.codigo].nodo
                );
            });
            this.pseudoDom[asg.codigo]["nodo"].addEventListener(
                "click",
                (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (this.selected) {
                        this.selected.nodo.classList.remove("plan_selected");
                        this.selected.requisitos.forEach(
                            n => n.classList.remove("plan_requisito")
                        );
                        this.selected.apertura.forEach(
                            n => n.classList.remove("plan_apertura")
                        );
                    }
                    this.selected = this.pseudoDom[asg.codigo];
                    this.selected.nodo.classList.add("plan_selected");
                    this.selected.requisitos.forEach(
                        n => n.classList.add("plan_requisito")
                    );
                    this.selected.apertura.forEach(
                        n => n.classList.add("plan_apertura")
                    );
                }
            );
        });
    }
}