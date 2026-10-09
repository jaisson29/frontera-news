import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export type Categoria =
  | "educativas"
  | "tecnologicas"
  | "turisticas"
  | "comerciales";

export interface Noticia {
  id: number;
  categoria: Categoria;
  titulo: string;
  resumen: string;
  contenido: string;
  imagen: string;
  fecha: string;
}

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useNoticiasStore = defineStore("noticias", () => {
  const noticias = ref<Noticia[]>([
    {
      id: 1,
      categoria: "tecnologicas",
      titulo: "La inteligencia artificial llega a las aulas universitarias",
      resumen:
        "Universidades de la región empiezan a integrar asistentes de IA en sus procesos de aprendizaje.",
      contenido:
        "Varias universidades de Latinoamérica anunciaron programas piloto para integrar asistentes de inteligencia artificial en sus procesos académicos. La iniciativa busca apoyar a los estudiantes en tareas de investigación, resolución de dudas y retroalimentación temprana sobre sus trabajos, sin reemplazar el acompañamiento de los docentes. Los primeros resultados muestran una mejora en los tiempos de respuesta a consultas frecuentes y una mayor participación en foros de discusión.",
      imagen: "https://picsum.photos/seed/tech1/600/360",
      fecha: "2026-08-14",
    },
    {
      id: 2,
      categoria: "educativas",
      titulo: "Nuevo programa de becas para carreras de tecnología",
      resumen: "El ministerio de educación amplía su oferta de becas enfocadas en programas STEM.",
      contenido:
        "El programa de becas anunciado busca ampliar el acceso a carreras de ciencia, tecnología, ingeniería y matemáticas para estudiantes de bajos recursos. La convocatoria cubrirá matrícula completa y un auxilio de sostenimiento durante los primeros cuatro semestres, priorizando a estudiantes de regiones con menor acceso a educación superior de calidad.",
      imagen: "https://picsum.photos/seed/edu1/600/360",
      fecha: "2026-08-10",
    },
    {
      id: 3,
      categoria: "turisticas",
      titulo: "Cinco destinos poco conocidos para el próximo puente festivo",
      resumen: "Una guía rápida de lugares fuera de las rutas turísticas tradicionales.",
      contenido:
        "Alejarse de los destinos más concurridos puede ser una gran alternativa para el próximo fin de semana largo. Esta guía reúne cinco lugares con paisajes naturales destacados, gastronomía típica y opciones de alojamiento económicas, ideales para viajeros que buscan una experiencia distinta a la oferta turística convencional.",
      imagen: "https://picsum.photos/seed/turismo1/600/360",
      fecha: "2026-08-05",
    },
    {
      id: 4,
      categoria: "comerciales",
      titulo: "El comercio electrónico local crece un 18% este semestre",
      resumen:
        "Pequeños negocios reportan un aumento sostenido en ventas a través de canales digitales.",
      contenido:
        "Un informe reciente sobre comercio electrónico señala que los pequeños y medianos negocios locales incrementaron sus ventas digitales en un 18% durante el primer semestre del año. El crecimiento se atribuye a la adopción de pasarelas de pago más accesibles y al uso de redes sociales como canal principal de ventas.",
      imagen: "https://picsum.photos/seed/comercio1/600/360",
      fecha: "2026-08-02",
    },
    {
      id: 5,
      categoria: "tecnologicas",
      titulo: "Angular renueva su guía oficial para principiantes",
      resumen:
        "El equipo del framework publicó material actualizado orientado a nuevos desarrolladores.",
      contenido:
        "El equipo detrás de Angular publicó una guía renovada pensada para quienes se inician en el framework. El material incluye ejemplos prácticos de componentes, enlace de datos (data binding) y buenas prácticas de organización de proyectos, buscando reducir la curva de aprendizaje para desarrolladores que vienen de HTML, CSS y JavaScript puro.",
      imagen: "https://picsum.photos/seed/tech2/600/360",
      fecha: "2026-07-28",
    },
    {
      id: 6,
      categoria: "educativas",
      titulo: "Talleres gratuitos de pensamiento lógico para colegios públicos",
      resumen:
        "Una fundación educativa lleva talleres de lógica y programación a instituciones públicas.",
      contenido:
        "La iniciativa busca acercar el pensamiento lógico y los fundamentos de programación a estudiantes de educación media en instituciones públicas. Los talleres, de carácter gratuito, se dictarán los fines de semana durante el segundo semestre del año y contarán con material didáctico desarrollado por voluntarios del sector tecnológico.",
      imagen: "https://picsum.photos/seed/edu2/600/360",
      fecha: "2026-07-20",
    },
    {
      id: 7,
      categoria: "turisticas",
      titulo: "La ruta gastronómica que está transformando un pueblo cafetero",
      resumen: "Un pequeño municipio impulsa su economía local a través del turismo gastronómico.",
      contenido:
        "Un municipio de la región cafetera ha logrado dinamizar su economía a través de una ruta gastronómica que combina productos locales, historia cafetera y experiencias comunitarias. La iniciativa, liderada por productores locales, ha incrementado la visita de turistas nacionales durante los últimos meses.",
      imagen: "https://picsum.photos/seed/turismo2/600/360",
      fecha: "2026-07-15",
    },
    {
      id: 8,
      categoria: "comerciales",
      titulo: "Startups locales acceden a fondo de inversión regional",
      resumen: "Ocho startups fueron seleccionadas para recibir capital semilla este trimestre.",
      contenido:
        "Un fondo de inversión regional anunció la selección de ocho startups que recibirán capital semilla durante este trimestre. Las empresas beneficiadas pertenecen a sectores como logística, agrotecnología y comercio electrónico, y deberán presentar avances trimestrales sobre el uso de los recursos.",
      imagen: "https://picsum.photos/seed/comercio2/600/360",
      fecha: "2026-07-10",
    },
  ]);

  const destacadas = computed(() => {
    return noticias.value.slice(0, 3);
  });

  const favoritos = ref<number[]>(loadFavoritos());

  watch(
    favoritos,
    (ids) => {
      localStorage.setItem("favoritos", JSON.stringify(ids));
    },
    { deep: true },
  );

  const esFavorito = (id: number) => {
    return favoritos.value.includes(id);
  };

  const toggleFavorito = (id: number) => {
    if (esFavorito(id)) {
      favoritos.value = favoritos.value.filter((favId) => favId !== id);
    } else {
      favoritos.value.push(id);
    }
    console.log("Favoritos actualizados:", favoritos.value);
  };

  const buscarPorId = (id: number) => {
    return noticias.value.find((noticia) => noticia.id === id);
  };

  const NOMBRES_CATEGORIA: Record<Categoria, string> = {
    educativas: "Educativa",
    tecnologicas: "Tecnológica",
    turisticas: "Turística",
    comerciales: "Comercial",
  };

  const categoriaSeleccionada = ref("todas");
  const noticiasFiltradas = computed(() => {
    if (categoriaSeleccionada.value === "todas") {
      return noticias.value;
    }

    return noticias.value.filter(
      (noticia) => noticia.categoria === categoriaSeleccionada.value,
    );
  });

  const seleccionarCategoria = (categoria: string) => {
    categoriaSeleccionada.value = categoria;
  };

  return {
    noticias,
    favoritos,
    toggleFavorito,
    esFavorito,
    buscarPorId,
    destacadas,
    categoriaSeleccionada,
    noticiasFiltradas,
    seleccionarCategoria,
    NOMBRES_CATEGORIA,
  };
});

function loadFavoritos(): number[] {
  const favoritosGuardados = localStorage.getItem("favoritos");

  if (!favoritosGuardados) {
    return [];
  }

  try {
    const favoritosParseados: unknown = JSON.parse(favoritosGuardados);

    if (
      Array.isArray(favoritosParseados) &&
      favoritosParseados.every((id) => typeof id === "number")
    ) {
      return favoritosParseados;
    }
  } catch (error) {
    console.error("No se pudieron cargar los favoritos guardados.", error);
  }

  return [];
}
