<script setup lang="ts">
import {UiButton, MyComponent} from "@korinovsky/ui-kit-vue";
</script>

<template>
  <div>
    <MyComponent first="Your" last="Name" middle='asd' />
    <div>
      <UiButton>Default</UiButton>
      <UiButton color='black'>Black</UiButton>
      <UiButton color='gray'>Gray</UiButton>
      <UiButton color='green'>Green</UiButton>
      <UiButton color='white'>White</UiButton>
    </div>
    <div>
      <UiButton>Default</UiButton>
      <UiButton size='l'>Large</UiButton>
      <UiButton size='m'>Medium</UiButton>
      <UiButton size='s'>Small</UiButton>
    </div>
  </div>
</template>
