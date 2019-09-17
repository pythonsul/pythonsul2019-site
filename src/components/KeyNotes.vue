<template>
  <div class="key-note" :class="{'key-note--reverse': reverse}">
      <img class="key-note__img" :src="require(`../assets/${image}`)" alt="">
      <div class="key-note__description" :class="{'key-note__description--reverse': reverse}">
        <h2>{{name}}</h2>
        <strong>{{identification}}</strong>
        <p>{{description}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'KeyNotes',
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    image: {
      type: String
    },
    name: {
      type: String
    },
    identification: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>
