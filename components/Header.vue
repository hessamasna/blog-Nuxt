<template>
  <Disclosure as="nav" class="" v-slot="{ open }">
    <div class="w-full shadow">

      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between center">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:gap-28 sm:justify-start ">
            <div class="flex flex-shrink-0 items-center">
              <svg width="68" height="54" viewBox="0 0 68 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M66.7999 24.9164L51.3203 8.51642C50.3999 7.51234 48.8101 7.42866 47.806 8.43275C46.8019 9.35316 46.7183 10.943 47.7224 11.947L61.5285 26.6736L47.6387 41.3164C46.7183 42.3205 46.7183 43.9103 47.7224 44.8307C48.2244 45.2491 48.8101 45.5001 49.4795 45.5001C50.1489 45.5001 50.8183 45.2491 51.3203 44.7471L66.7999 28.347C67.7203 27.4266 67.7203 25.9205 66.7999 24.9164Z"
                    fill="#00C853"/>
                <path
                    d="M20.2774 8.43263C19.2733 7.51222 17.6835 7.51222 16.7631 8.5163L1.19983 24.9163C0.279419 25.9204 0.279419 27.4265 1.19983 28.3469L16.6794 44.7469C17.1815 45.2489 17.8509 45.5 18.5202 45.5C19.106 45.5 19.7753 45.2489 20.2774 44.8306C21.2815 43.9102 21.3651 42.3204 20.3611 41.3163L6.47126 26.6734L20.3611 12.0306C21.2815 11.0265 21.2815 9.43671 20.2774 8.43263Z"
                    fill="#00C853"/>
                <path
                    d="M38.0999 0.0652796C36.7611 -0.102067 35.4223 0.818341 35.255 2.15712L27.8917 50.353C27.7243 51.6918 28.6448 53.0306 29.9835 53.1979C30.1509 53.1979 30.2346 53.1979 30.4019 53.1979C31.657 53.1979 32.6611 52.2775 32.9121 51.1061L40.2754 2.91018C40.359 1.5714 39.4386 0.3163 38.0999 0.0652796Z"
                    fill="#00C853"/>
              </svg>

            </div>
            <div class="hidden sm:ml-6 sm:block  ">
              <div class="flex items-center gap-4 ">
                <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                          @click="toggleNavigationActivation(item)"
                          :class="[item.current ? 'text-green-500 border-b-2 border-green-500 ' : 'hover:text-green-500 hover:border-b-2', 'px-3 py-5  text-sm font-medium border-green-500 text-gray-400']"
                >{{ item.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" class="relative ml-3" @click="toggleLoginPopUp()" v-if="!isLogin">
              <div>
                <div
                    class="text-green-500 border-green-500 border px-8 py-1 rounded-xl hover:bg-green-500 hover:text-white hover:cursor-pointer ">
                  ورود
                </div>

              </div>
            </Menu>
            <div v-else class="text-green-500 font-semibold"> وارد شدید ! :)</div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
                          :aria-current="item.current ? 'page' : undefined">{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
  <login @successLogin="successLogin()" @togglePopUp="toggleLoginPopUp()" :is-show="isPopUpShow"/>
</template>

<script>
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/vue/24/outline'
import login from "./Login";

export default {
  components: {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    login
  },
  methods: {
    toggleLoginPopUp() {
      this.isPopUpShow = !this.isPopUpShow;
    },
    successLogin() {
      this.isPopUpShow = !this.isPopUpShow;
      this.isLogin = true;
    },
    toggleNavigationActivation(item) {
      this.navigation.map(nav => {
        nav.current = nav.name === item.name;
      })
    }
  },
  data() {
    return {
      isPopUpShow: false,
      isLogin: false,
      navigation: [
        {name: 'خانه', href: '/', current: false},
        {name: 'محصولات', href: '#', current: false},
        {name: 'خدمات', href: '#', current: false},
        {name: 'وبلاگ', href: '/blogs', current: false},
      ]
    }
  },
}

</script>