<template>
<div class="min-h-screen">
  <span>
    post Id:
{{id}}
  </span>
</div>
</template>

<script setup>
import {useFetch, useRoute} from "nuxt/app";

const { id } = useRoute().params

// const { data: post } = await useFetch('https://challenge.webjar.ir/posts/'+id)

//todo we can sent request and fetch data and show post
</script>

<style scoped>

</style>