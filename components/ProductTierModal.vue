<template>
  <div
    class="w-full border border-gray-300 rounded-lg"
    :class="{
      'opacity-30 pointer-events-none': product.amountLeft === 0,
      '!border-moderate-cyan': product.id == selected
    }"
  >
    <!-- Product details -->
    <div class="flex items-start justify-between p-4 md:p-6">
      <div class="flex items-center space-x-5">
        <div
          class="w-[22px] h-[22px] border rounded-full flex items-center justify-center hover:cursor-pointer"
          @click="selectReward(product.id)"
        >
          <div
            v-show="product.id == selected"
            class="w-[12px] h-[12px] bg-moderate-cyan rounded-full"
          ></div>
        </div>
        <div
          class="flex flex-col items-start md:items-center md:space-x-5 md:flex-row"
        >
          <h3
            class="text-xl font-bold cursor-pointer hover:text-moderate-cyan"
            @click="selectReward(product.id)"
          >
            {{ product.title }}
          </h3>
          <p class="font-semibold text-moderate-cyan">
            Pledge ${{ product.pledgeAmount }} or more
          </p>
        </div>
      </div>
      <div class="hidden md:block">
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
      <p class="block px-10 pb-6 text-xl font-bold md:hidden">
        {{ product.amountLeft }}
        <span class="text-sm font-normal text-dark-gray">left</span>
      </p>
    </div>

    <!-- Input pledge form -->
    <div v-show="product.id == selected" class="w-full p-4 border-t md:p-6">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <div class="pb-4 md:pb-0">
          <p class="text-sm text-dark-gray">Enter your pledge</p>
        </div>
        <div class="flex flex-col items-end justify-end">
          <div class="space-x-4">
            <label for="pledgeAmount" class="text-sm text-dark-gray">$</label>
            <input
              type="number"
              :placeholder="product.pledgeAmount"
              class="inline-block px-4 py-2 border max-w-[100px] rounded-full focus:outline-none focus:ring-2 focus:ring-moderate-cyan"
              :min="product.pledgeAmount"
              v-model="amountPledged"
              @keyup="validateInput"
              id="pledgeAmount"
            />
            <Btn
              @click.native="
                handleData(product.id, amountPledged), handleSuccessModal()
              "
              :disalbled="invalidInput"
              >Continue</Btn
            >
          </div>
          <p class="pt-2 text-xs text-red-600" v-show="invalidInput">
            You must enter the minimum pledge amount.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";
export default {
  props: ["product", "selected"],
  data() {
    return {
      amountPledged: this.$props.product.pledgeAmount,
      invalidInput: false,
      emptyInput: false
    };
  },
  components: {
    Btn
  },
  methods: {
    // Emits event to index to handle the selected reward
    selectReward(id) {
      this.$emit("select-reward", id);
    },
    // Handles the pledged data
    handleData(productId, amountPledged) {
      if (this.invalidInput != true && this.amountPledged != null) {
        // Send data to parent
        this.$emit("set-data", productId, amountPledged);
      }
    },
    // Emit event to handle success modal if input is valid
    handleSuccessModal() {
      if (this.invalidInput != true && this.amountPledged != null) {
        this.$emit("handle-success-modal");
        this.amountPledged = null;
      }
    },
    validateInput() {
      if (this.amountPledged < this.$props.product.pledgeAmount) {
        this.invalidInput = true;
      } else {
        this.invalidInput = false;
      }
    }
  }
};
</script>
