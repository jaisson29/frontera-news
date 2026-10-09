<script lang="ts" setup>
defineProps({
  clave: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  activo: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits<{
  seleccionar: [clave: string];
}>();
</script>

<template>
  <button
    class="chip"
    :class="{ 'chip-activo': activo }"
    :data-categoria="clave"
    type="button"
    @click="emit('seleccionar', clave)"
  >
    {{ categoria }}
  </button>
</template>

<style>
.chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.chip {
  background: var(--papel-alterno);
  border: 1px solid var(--linea);
  color: var(--tinta-suave);
  font-size: 13.5px;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 20px;
  cursor: pointer;
}

.chip-activo {
  background: var(--tinta);
  border-color: var(--tinta);
  color: #fff;
}
</style>
