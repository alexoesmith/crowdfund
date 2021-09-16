<template>
  <div
    class="w-full p-10 border border-gray-300 rounded-lg"
    :class="{ 'opacity-30 pointer-events-none': product.amountLeft === 0 }"
    data-aos="fade-up"
  >
    <div class="flex items-center justify-between">
      <h5 class="text-xl font-bold">Bamboo Stand</h5>
      <p class="text-sm text-moderate-cyan">
        Pledge ${{ product.pledgeAmount }} or more
      </p>
    </div>
    <p class="pt-6 leading-relaxed text-dark-gray">{{ product.body }}</p>
    <div class="flex items-center justify-between pt-6">
      <div class="flex items-center">
        <span class="text-4xl font-bold">{{ product.amountLeft }}</span>
        <span class="pl-2 text-sm leading-none text-dark-gray">left</span>
      </div>
      <Btn
        :class="{ '!bg-dark-gray': product.amountLeft === 0 }"
        :disabled="product.amountLeft === 0"
        >Select Reward</Btn
      >
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";

export default {
  props: ["product"],
  components: {
    Btn
  }
};
</script>
