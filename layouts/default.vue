<template>
  <div>
    <Header/>
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "default",

  methods: {},
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>