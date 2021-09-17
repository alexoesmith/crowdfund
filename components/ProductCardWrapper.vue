<template>
  <div class="container">
    <div
      class="bg-white max-w-[800px] rounded-lg shadow-sm md:p-10 p-6 m-auto relative"
      :class="topCard"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["topCard"]
};
</script>
