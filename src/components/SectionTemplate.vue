<template>
  <section class="info-section" :class="{'info-section--light': light}">
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
    }
  }
}
</script>

<style lang="scss">
.info-section {
  background-color: $golden-yellow;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;

  &--light{
    background-color: $clear;
  }

  &__text {
    width: 60%;
  }

  &__title {
    font-size: 2em;
    text-transform: uppercase;
    border-bottom: 4px solid $cinnabar;
    padding-left: 20%;
    align-self: flex-start;

    &--light{
      border-bottom: 4px solid $deep-sky-blue;
    }
  }
}
</style>
