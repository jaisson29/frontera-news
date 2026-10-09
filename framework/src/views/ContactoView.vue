<script lang="ts" setup>
import { onUnmounted, reactive, ref } from "vue";

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formulario = reactive({
  nombre: "",
  correo: "",
  asunto: "",
  mensaje: "",
});

const errores = reactive({
  nombre: "",
  correo: "",
  asunto: "",
  mensaje: "",
});

const mostrarConfirmacion = ref(false);
let temporizadorConfirmacion: ReturnType<typeof setTimeout> | undefined;

function validarFormulario(): boolean {
  let esValido = true;

  errores.nombre = formulario.nombre.trim() ? "" : "Ingresa tu nombre.";
  errores.correo =
    formulario.correo.trim() && REGEX_CORREO.test(formulario.correo.trim())
      ? ""
      : "Ingresa un correo válido.";
  errores.asunto = formulario.asunto.trim() ? "" : "Ingresa un asunto.";
  errores.mensaje = formulario.mensaje.trim() ? "" : "Escribe tu mensaje.";

  esValido = !Object.values(errores).some((mensaje) => mensaje !== "");
  return esValido;
}

function enviarFormulario() {
  mostrarConfirmacion.value = false;

  if (!validarFormulario()) {
    return;
  }

  formulario.nombre = "";
  formulario.correo = "";
  formulario.asunto = "";
  formulario.mensaje = "";
  mostrarConfirmacion.value = true;

  temporizadorConfirmacion = setTimeout(() => {
    mostrarConfirmacion.value = false;
  }, 6000);
}

onUnmounted(() => {
  if (temporizadorConfirmacion) {
    clearTimeout(temporizadorConfirmacion);
  }
});
</script>

<template>
  <main>
    <section class="seccion">
      <div class="contenedor formulario-contacto">
        <div class="seccion-titulo-formulario">
          <div class="seccion-icono">
            <img src="@/assets/logo_white.svg" alt="Icono de contacto" />
          </div>
          <h2>Contáctanos</h2>
          <div>
            <p>Equipo Frontera News</p>
          </div>
        </div>

        <form id="form-contacto" class="form-contacto" novalidate @submit.prevent="enviarFormulario">
          <div class="campo-grupo">
            <label for="nombre">Nombre</label>
            <input
              id="nombre"
              v-model="formulario.nombre"
              name="nombre"
              type="text"
              placeholder="nombre"
              :class="{ 'campo-invalido': errores.nombre }"
            />
            <p id="error-nombre" class="error-campo">{{ errores.nombre }}</p>
          </div>

          <div class="campo-grupo">
            <label for="correo">Correo electrónico</label>
            <input
              id="correo"
              v-model="formulario.correo"
              name="correo"
              type="email"
              placeholder="correo@ejemplo.com"
              :class="{ 'campo-invalido': errores.correo }"
            />
            <p id="error-correo" class="error-campo">{{ errores.correo }}</p>
          </div>

          <div class="campo-grupo">
            <label for="asunto">Asunto</label>
            <input
              id="asunto"
              v-model="formulario.asunto"
              name="asunto"
              type="text"
              placeholder="asunto"
              :class="{ 'campo-invalido': errores.asunto }"
            />
            <p id="error-asunto" class="error-campo">{{ errores.asunto }}</p>
          </div>

          <div class="campo-grupo">
            <label for="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              v-model="formulario.mensaje"
              name="mensaje"
              placeholder="mensaje"
              :class="{ 'campo-invalido': errores.mensaje }"
            ></textarea>
            <p id="error-mensaje" class="error-campo">{{ errores.mensaje }}</p>
          </div>

          <button type="submit" class="boton">Enviar mensaje</button>

          <p v-if="mostrarConfirmacion" id="mensaje-confirmacion" class="mensaje-confirmacion">
            Tu mensaje fue enviado correctamente. Te responderemos pronto.
          </p>
        </form>
      </div>
    </section>
  </main>
</template>

<style>
.form-contacto {
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.campo-grupo label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
}

.campo-grupo input,
.campo-grupo textarea {
  width: 100%;
  border: 1px solid var(--linea);
  border-radius: 4px;
  padding: 10px 12px;
  font-family: var(--fuente-texto);
  font-size: 15px;
  background: #fff;
}

.campo-grupo textarea {
  resize: vertical;
  min-height: 110px;
}

.campo-invalido {
  border-color: var(--error) !important;
}

.error-campo {
  color: var(--error);
  font-size: 13px;
  min-height: 16px;
  margin-top: 4px;
}

.mensaje-confirmacion {
  background: #eaf1ef;
  border: 1px solid var(--verde);
  color: #274a47;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 14.5px;
}

.formulario-contacto {
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border: 2px solid var(--tinta-suave);
  padding: 17px 24px;
  border-radius: 20px;
}

.formulario-contacto input,
.formulario-contacto textarea {
  background: var(--papel);
  border: 1px solid var(--tinta);
}

.formulario-contacto h2 {
  font-size: 42px;
  margin-bottom: 12px;
}
</style>
