<template>
  <div
    class="bg-white max-w-[800px] rounded-lg shadow-sm px-10 pt-12 pb-10 m-auto -mt-20 relative"
  >
    <ProductLogo class="absolute transform -translate-x-1/2 left-1/2 -top-8" />
    <div class="text-center">
      <h2 class="pb-4 text-3xl font-bold">Mastercraft Bamboo Monitor Riser</h2>
      <p class="text-dark-gray">
        A beautiful &amp; handcrafted monitor stand to reduce neck and eye
        strain.
      </p>
      <div class="flex items-center justify-between pt-10">
        <Btn @click.native="handleModal">Back This Project</Btn>
        <div
          class="relative flex items-center hover:cursor-pointer"
          @click="toggleBookmark"
        >
          <div
            class="w-[70px] h-[70px] text-xl rounded-full flex items-center justify-center absolute -left-6 top-1/2 transform -translate-y-1/2"
            :class="
              bookmarked
                ? 'bg-moderate-cyan text-white'
                : 'bg-gray-800 text-gray-400'
            "
          >
            <i class="fas fa-bookmark"></i>
          </div>
          <div
            class="w-[200px] py-5 pr-12 text-sm font-semibold bg-gray-200 rounded-full shadow-sm pl-14"
          >
            <span v-if="!bookmarked">Bookmark</span>
            <span v-else class="text-moderate-cyan">Bookmarked</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCardWrapper from "./ProductCardWrapper.vue";
import ProductLogo from "./ProductLogo.vue";
import Btn from "./Btn.vue";

export default {
  components: {
    ProductCardWrapper,
    ProductLogo,
    Btn
  },
  data() {
    return {
      bookmarked: false
    };
  },
  methods: {
    toggleBookmark() {
      this.bookmarked = !this.bookmarked;
    },
    handleModal() {
      this.$emit("handle-modal");
    }
  }
};
</script>
