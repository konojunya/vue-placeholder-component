<template>
  <div ref="div"></div>
</template>

<script>
export default {
  props: ["src", "width", "delay"],
  created() {
    this.delay = this.delay || 0
  },
  mounted() {
    let type = ""
    const div = this.$refs.div
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext('2d')
    const image = new Image()
    image.crossOrigin = 'Anonymous'
    div.appendChild(canvas)

    image.onload = () => {
      const width = image.width
      const height = image.height
      const gav = this.getAspectValue(image)
      ctx.drawImage(image, 0, 0, gav.width, gav.height)
      const rgb = this.getDominantColor(ctx, gav.width, gav.height)
      const n = this.getAspectValue(image, this.width)
      canvas.width = n.width
      canvas.height = n.height
      ctx.fillStyle = `rgb(${rgb.join(",")})`
      ctx.fillRect(0, 0, n.width, n.height)
      setTimeout(() => {
        ctx.drawImage(image, 0, 0, n.width, n.height)
        const base64 = canvas.toDataURL(type)
        const imageElement = document.createElement("img")
        imageElement.src = base64
        div.removeChild(canvas)
        div.appendChild(imageElement)
      }, this.delay)
    }
    const v = this.src.split(".")
    type = `image/${v[v.length - 1]}`
    image.src = this.src
  },
  methods: {
    getAspectValue(img, s = 100) {
      if(img.width < img.height) {
        return {
          width: Math.ceil(img.width * ( s / img.height )),
          height: s
        }
      } else {
        return {
          width: s,
          height: Math.ceil(img.height * ( s / img.width ))
        }
      }
    },
    getDominantColor(ctx, w, h) {
      const rgb = [0, 0, 0]
      const count = w * h
      for(let i = 0; i <= w; i++) {
        for(let j = 0; j <= h; j++) {
          const [red, green, blue, alpha] = Array.slice(ctx.getImageData(i, j, 1, 1).data)
          rgb[0] += red
          rgb[1] += green
          rgb[2] += blue
        }
      }
      rgb[0] = Math.ceil(rgb[0] / count)
      rgb[1] = Math.ceil(rgb[1] / count)
      rgb[2] = Math.ceil(rgb[2] / count)
      return rgb
    }
  }
}
</script>