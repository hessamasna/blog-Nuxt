<template>
  <div>
    <div class="text-center my-6">
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">وبلاگ</p>
    </div>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:basis-1/4">
        <div class="rounded-xl group space-x-6 bg-white bg-opacity-50 shadow-xl">دسته بندی</div>
      </div>
      <div class="basis-3/4 ">
        <Post/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>