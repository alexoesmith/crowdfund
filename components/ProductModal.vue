<template>
  <div
    class="fixed inset-0 z-20 flex justify-center py-10 bg-black bg-opacity-70"
    @click.self="handleModal"
  >
    <div
      class="bg-white rounded-lg max-w-[800px] md:p-10 p-6 relative overflow-scroll m-auto h-full"
    >
      <span
        class="absolute top-0 right-0 p-4 text-3xl text-dark-gray hover:cursor-pointer"
        @click="handleModal"
      >
        <i class="fas fa-times"></i>
      </span>
      <h3 class="pb-4 text-2xl font-bold">Back This Project</h3>
      <p class="text-dark-gray">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <!-- Product tiers -->
      <div class="pt-10 space-y-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // Emit event to index to handle the modal state
    handleModal() {
      this.$emit("handle-modal");
    }
  }
};
</script>
