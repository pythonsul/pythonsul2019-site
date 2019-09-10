<template>
  <section
    class="info-section"
    :class="{'info-section--light': light, 'info-section--angle': angle, 'info-section--no-angle-bot': noAngleBot, 'info-section--angle-margin': angleMargin}"
    >
    <h2 class="info-section__title" :class="{'info-section__title--light': light}">
      {{title}}
    </h2>
    <div class="info-section__text">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    light: {
      type: Boolean,
      default: false
    },
    angle: {
      type: Boolean,
      default: false
    },
    noAngleBot: {
      type: Boolean,
      default: false
    },
    angleMargin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
</style>
