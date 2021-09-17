<template>
  <div
    class="w-full p-4 border border-gray-300 rounded-lg md:p-10"
    :class="{ '!opacity-30 pointer-events-none': product.amountLeft === 0 }"
  >
    <div
      class="flex flex-col items-start justify-between md:items-center md:flex-row"
    >
      <h5 class="pb-2 text-xl font-bold md:pb-0">{{ product.title }}</h5>
      <p
        class="text-sm text-moderate-cyan"
        :class="{ '!text-dark-gray': product.amountLeft === 0 }"
      >
        Pledge ${{ product.pledgeAmount }} or more
      </p>
    </div>
    <p class="pt-6 leading-relaxed text-dark-gray">{{ product.body }}</p>
    <div
      class="flex flex-col items-start justify-between pt-6 md:items-center md:flex-row"
    >
      <div class="flex items-center pb-6 md:pb-0">
        <span class="text-4xl font-bold">{{ product.amountLeft }}</span>
        <span class="pl-2 text-sm leading-none text-dark-gray">left</span>
      </div>
      <Btn
        :class="{ '!bg-dark-gray': product.amountLeft === 0 }"
        :disabled="product.amountLeft === 0"
        @click.native="handleModal(), selectReward(product.id)"
      >
        <span v-if="product.amountLeft > 0">Select Reward</span>
        <span v-else>Out of Stock</span>
      </Btn>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Btn from "./Btn.vue";

export default {
  props: ["product"],
  components: {
    Btn
  },
  methods: {
    // Emit event to index to handle the modal state
    handleModal() {
      this.$emit("handle-modal");
    },
    // Emit event to index to handle the selected reward in the modal
    selectReward(id) {
      this.$emit("select-reward", id);
    }
  }
};
</script>
