<template>
  <ProductCardWrapper topCard="-mt-20">
    <ProductLogo class="absolute transform -translate-x-1/2 left-1/2 -top-8" />
    <div class="text-center">
      <h2 class="pt-6 pb-4 text-3xl font-bold">
        Mastercraft Bamboo Monitor Riser
      </h2>
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
            class="w-[70px] h-[70px] text-xl rounded-full flex items-center justify-center sm:absolute -left-6 top-1/2 sm:transform sm:-translate-y-1/2"
            :class="
              bookmarked
                ? 'bg-moderate-cyan text-white'
                : 'bg-gray-800 text-gray-400'
            "
          >
            <i class="fas fa-bookmark"></i>
          </div>
          <div
            class="w-[200px] py-5 pr-12 text-sm font-semibold bg-gray-200 rounded-full shadow-sm pl-14 sm:block hidden"
          >
            <span v-if="!bookmarked">Bookmark</span>
            <span v-else class="text-moderate-cyan">Bookmarked</span>
          </div>
        </div>
      </div>
    </div>
  </ProductCardWrapper>
</template>

<script>
import ProductCardWrapper from "./ProductCardWrapper.vue";
import ProductLogo from "./ProductLogo.vue";
import Btn from "./Btn.vue";

export default {
  props: ["top-card"],
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
    // Toggle wether the project is bookmarked
    toggleBookmark() {
      this.bookmarked = !this.bookmarked;
    },
    // Emit event to index to handle the modal state
    handleModal() {
      this.$emit("handle-modal");
    }
  }
};
</script>
