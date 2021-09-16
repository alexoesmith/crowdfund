<template>
  <div class="fixed inset-0 flex justify-center py-20 bg-black bg-opacity-70">
    <div
      class="bg-white rounded-lg max-w-[800px] p-10 relative overflow-scroll"
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
      <div class="pt-10 space-y-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleModal() {
      this.$emit("handle-modal");
    }
  }
};
</script>
