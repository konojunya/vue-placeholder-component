<template>
  <section>
    <img-placeholder src="/img/sample.jpg" width="600" delay="3000" />
    <img-placeholder src="/img/mori.jpg" width="600" delay="3000" />
  </section>
</template>

<script>
import ImgPlaceholder from './img-placeholder/index.vue'

export default {
  components: {
    ImgPlaceholder
  }
}
</script>
