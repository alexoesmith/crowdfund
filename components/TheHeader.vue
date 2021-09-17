<template>
  <header class="absolute top-0 w-full py-10">
    <div class="container">
      <div class="flex items-center justify-between ">
        <nuxt-link to="/"><Logo /></nuxt-link>
        <nav class="hidden sm:block">
          <ul class="flex items-center space-x-6 text-sm text-white">
            <li v-for="page in pages" :key="page.id">{{ page.title }}</li>
          </ul>
        </nav>
        <div class="block text-2xl text-white sm:hidden">
          <span @click="toggleMenu" class="hover:cursor-pointer"
            ><i class="fas fa-bars"></i
          ></span>
        </div>
      </div>
      <nav
        class="w-full h-auto mt-4 overflow-hidden bg-white rounded-lg shadow-xl sm:hidden"
        v-show="showMobileMenu"
      >
        <ul class="divide-y">
          <li
            class="p-4 hover:bg-moderate-cyan hover:text-white"
            v-for="page in pages"
            :key="page.id"
          >
            {{ page.title }}
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "../components/Logo";
export default {
  components: {
    Logo
  },
  data() {
    return {
      showMobileMenu: false,
      pages: [
        {
          id: 1,
          title: "About"
        },
        {
          id: 2,
          title: "Discover"
        },
        {
          id: 3,
          title: "Get Started"
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
};
</script>
