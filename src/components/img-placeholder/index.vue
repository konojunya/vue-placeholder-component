<template>
  <div ref="wrapper"></div>
</template>

<script>
export default {
  props: ["src"],
  mounted() {
    const wrapper = this.$refs.wrapper
    wrapper.style.width = "500px";
    wrapper.style.height = "200px";
    wrapper.style.backgroundColor = "gray"

    const image = new Image();
    image.onload = () => {
      image.width = 500
      this.$refs.wrapper.appendChild(image)
      this.$forceUpdate()
    }

    setTimeout(() => {
      image.src = this.src
    }, 1000)
  }
}
</script>