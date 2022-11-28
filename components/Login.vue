<template>
  <div v-if="isShow"
       class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
       id="modal-id">
    <div onclick="isShow = !isShow" class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <xdiv class="w-full  max-w-5xl  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center p-5 grid justify-center">
          <h2 class="text-xl font-bold py-4 ">ورود به حساب کاربری</h2>
          <div class="col-span-6 sm:col-span-4">
            <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
            <input type="text" name="email-address" id="email-address" autocomplete="email"
                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>
        <!--footer-->
        <div class="p-3  mt-2 text-center space-x-4 md:block">
          <button
              class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
            ورود
          </button>
        </div>
      </div>
    </xdiv>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ['isShow']
}
</script>

<style scoped>

</style>