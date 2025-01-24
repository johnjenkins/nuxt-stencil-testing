<script lang="ts" setup>
  const items = ref([1, 2, 3])
</script>

<template>
  <div>
    <p>Shadow:</p>

    <my-simple-shadow first="Stencil" middle="'Don't call me a framework'" last="JS">
      <my-simple-shadow v-for="i in items" first="Stencil" middle="'Don't call me a framework'" last="JS">
        {{ i }}
      </my-simple-shadow>
    </my-simple-shadow>

    <p>Scoped:</p>

    <my-simple-scoped first="Stencil" middle="'Don't call me a framework'" last="JS">
      <my-simple-scoped v-for="i in items" first="Stencil" middle="'Don't call me a framework'" last="JS">
        {{ i }}
      </my-simple-scoped>
    </my-simple-scoped>
  </div>
</template>
