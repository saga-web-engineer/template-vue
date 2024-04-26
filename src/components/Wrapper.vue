<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: min(90%, 1060px);
  margin-inline: auto;
}
</style>
