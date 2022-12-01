<template>
  <div>
    <div class="text-center mb-6">
      <p class=" pt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">وبلاگ</p>
      <div class="relative mt-2 max-w-2xl mx-auto">
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
                  fill="#7B7B7B"/>
            <mask id="mask0_1688_271" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="19"
                  height="18">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
                    fill="white"/>
            </mask>
            <g mask="url(#mask0_1688_271)">
              <rect width="24" height="24" fill="#7B7B7B"/>
            </g>
          </svg>

        </div>
        <input type="text" id="input-group-1" @keyup="search()" v-model="searchInput"
               class="border border-solid border-gray-300 rounded-xl w-full ps-10 text-sm p-3 h-12 shadow-md"
               placeholder="جستچو کنید ...">
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row gap-8">
      <div class="md:basis-1/4">
        <div class="rounded-xl bg-white bg-opacity-50 shadow-xl p-4">
          <div class="font-bold mb-3">
            دسته بندی
          </div>
          <div v-for="category in categories" class="mb-2">
            <div class="flex flex justify-between">
              <div class="ml-3 text-sm">
                <label for="comments" class="text-sm text-gray-500">{{ category.name }}</label>
              </div>
              <div class="flex h-5 items-center">
                <input :id="category.id" name="comments" type="checkbox" :checked="selectedCat.includes(category._id)"
                       @click="selectedCategory(category._id)"
                       class="h-4 w-4 rounded border-gray-300 bg-green-500 ring-green-500 checked:text-green-500 checked:accent-green-600 checked:stroke-red-700"/>
              </div>

            </div>
          </div>
          <loading v-if="loading"/>

        </div>
      </div>
      <div class="basis-3/4 ">
        <loading v-if="loading"/>
        <div v-for="post in shownPosts" class="mb-10">

          <Post v-if="selectedCat.length ===0? true: selectedCat.includes(post.category)" :post="post"/>
        </div>
        <div class="flex items-center justify-center gap-4 my-4 mb-8" v-if="shownPosts.length !== 0">

          <button @click="nextPage()" v-if="nextBtn" :disabled="!nextBtn"
                  class="text-green-500 py-0.5 border border-gray-300 rounded-md px-2 font-bold hover:text-white hover:bg-green-500 hover:border-green-500"> &lt
          </button>
          <div class="flex flex-row-reverse gap-2">

            <div v-for="index in pagesCount" :key="index" :class="['border border-green-500 px-2 py-0.5 rounded-md hover:text-white hover:bg-green-500 hover:border-green-500 cursor-default', currentPage === index?'bg-green-500 text-white':'']">
              {{ index }}
            </div>          </div>

          <button @click="previousPage()" v-if="previousBtn" :disabled="!previousBtn"
                  class="text-green-500 border py-0.5 border-gray-300 rounded-md px-2 font-bold hover:text-white hover:bg-green-500 hover:border-green-500">&gt
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../../components/loading";

export default {
  components: {Loading},
  async created() {
    this.loading = true;
    this.allPosts = await $fetch('https://challenge.webjar.ir/posts')
    this.pagesCount = await $fetch('https://challenge.webjar.ir/posts/count')
    this.shownPosts = this.allPosts
    this.pagesCount = Math.round(this.pagesCount / 10)
    this.shownPosts = this.shownPosts.splice(0, 10)
    this.categories = await $fetch('https://challenge.webjar.ir/post-categories')
    this.loading = false;
  },
  methods: {
    selectedCategory(id) {
      if (this.selectedCat.includes(id)) {
        this.selectedCat = this.selectedCat.filter(function (item) {
          return item !== id
        })
      } else {
        this.selectedCat.push(id)
      }
    },
    search() {
      if (this.searchInput.trim().length === 0) {
        this.shownPosts = this.allPosts
        return
      }

      this.shownPosts = this.allPosts.filter(post => {
        return post.title.includes(this.searchInput)
        // todo of wnt to search in body too
        // return post.title.includes(this.searchInput) || post.body.includes(this.searchInput)
      })
    },
    nextPage() {
      let all = this.allPosts;
      let nextIndex = this.currentPage * 10 - 1
      this.shownPosts = all.splice(nextIndex, 10)
      this.previousBtn = true
      if (nextIndex + 10 >= this.allPosts.length)
        this.nextBtn = false;

      this.currentPage++;

    },
    previousPage() {
      let all = this.allPosts;
      let nextIndex = (this.currentPage - 2) * 10
      console.log(this.allPosts[0])
      this.shownPosts = all.splice(nextIndex, 10)
      // console.log(this.shownPosts)
      if (nextIndex === 0)
        this.previousBtn = false;

      this.currentPage--;
    }


  },
  data() {
    return {
      nextBtn: true,
      previousBtn: false,
      currentPage: 1,
      pagesCount: 3,
      searchInput: '',
      loading: true,
      allPosts: [],
      categories: [],
      shownPosts: [],
      selectedCat: [],
    }
  }
}

</script>

<style scoped>

</style>