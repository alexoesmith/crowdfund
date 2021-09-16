<template>
  <div
    class="w-full border border-gray-300 rounded-lg"
    :class="{
      'opacity-30 pointer-events-none': product.amountLeft === 0,
      '!border-moderate-cyan': selected || selectedReward === product.id
    }"
  >
    <div class="flex items-start justify-between p-6">
      <div class="flex items-center space-x-5">
        <div
          class="w-[22px] h-[22px] border rounded-full flex items-center justify-center hover:cursor-pointer"
          @click="selectReward"
        >
          <div
            v-show="selected || selectedReward === product.id"
            class="w-[12px] h-[12px] bg-moderate-cyan rounded-full"
          ></div>
        </div>
        <h3
          class="text-xl font-bold cursor-pointer hover:text-moderate-cyan"
          @click="selectReward"
        >
          {{ product.title }}
        </h3>
        <p class="font-semibold text-moderate-cyan">
          Pledge ${{ product.pledgeAmount }} or more
        </p>
      </div>
      <div>
        <p class="text-xl font-bold">
          {{ product.amountLeft }}
          <span class="text-sm font-normal text-dark-gray">left</span>
        </p>
      </div>
    </div>
    <div>
      <p class="px-10 pb-6 leading-relaxed text-dark-gray">
        {{ product.body }}
      </p>
    </div>
    <div
      v-show="selected || selectedReward === product.id"
      class="w-full p-6 border-t"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-dark-gray">Enter your pledge</p>
        </div>
        <div class="space-x-4">
          <input
            type="number"
            :value="product.pledgeAmount"
            class="inline-block px-4 py-2 border max-w-[100px] rounded-full focus:outline-none focus:ring-2 focus:ring-moderate-cyan"
            :min="product.pledgeAmount"
          />
          <Btn>Continue</Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";
export default {
  props: ["product", "selectedReward"],
  data() {
    return {
      selected: false
    };
  },
  components: {
    Btn
  },
  methods: {
    selectReward() {
      this.selected = !this.selected;
    }
  }
};
</script>
