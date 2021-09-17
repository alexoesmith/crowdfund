<template>
  <div
    class="fixed inset-0 flex items-center justify-center py-20 bg-black bg-opacity-70"
    @click.self="handleSuccessModal"
  >
    <div
      class="bg-white rounded-lg max-w-[600px] md:p-10 p-6 relative overflow-scroll text-center flex-grow-0"
    >
      <span
        class="absolute top-0 right-0 p-4 text-3xl text-dark-gray hover:cursor-pointer"
        @click="handleSuccessModal"
      >
        <i class="fas fa-times"></i>
      </span>
      <div
        class="flex items-center justify-center w-20 h-20 m-auto text-4xl text-white rounded-full bg-moderate-cyan"
      >
        <i class="fas fa-check"></i>
      </div>
      <div class="py-10">
        <h3 class="pb-4 text-2xl font-bold">Thanks for your support!</h3>
        <p class="px-10 leading-relaxed text-dark-gray">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          comlpete.
        </p>
      </div>
      <Btn @click.native="handleSuccessModal">Got it!</Btn>
    </div>
  </div>
</template>

<script>
import Btn from "../components/Btn.vue";
export default {
  components: {
    Btn
  },
  methods: {
    // Emit event to index to handle the success modal state
    handleSuccessModal() {
      this.$emit("handle-success-modal");
    }
  }
};
</script>
