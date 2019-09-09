<template>
  <section
    class="info-section"
    :class="{'info-section--light': light, 'info-section--angle': angle, 'info-section--no-angle-bot': noAngleBot}"
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
  position: relative;

  &--light{
    background-color: $clear;
  }

  &--angle-light{
    &:after,
    &:before {
      background-color: $clear;
    }
  }

  &--angle{
    margin-top: 96px;
    margin-bottom: 96px;

    &:after,
    &:before {
      background-color: $golden-yellow;
      content: '';
      display: block;
      height: 100px;
      position: relative;
    }

    &:before {
      transform-origin: left top;
      width: 100%;
      left: 0px;
      top: 0px;
      transform: skewY(-4deg);
    }

    &:after{
      transform-origin: left top;
      width: 100%;
      bottom: -19px;
      left: 0px;
      transform: skewY(4deg);
    }
  }

  &--no-angle-bot{
    margin-bottom: 0;

    &:after{
      display: none !important;
    }
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
