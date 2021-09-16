<template>
  <ProductCardWrapper>
    <div class="grid items-center grid-cols-3 space-x-5 divide-x">
      <div class="px-10">
        <h3 class="pb-1 text-3xl font-bold">
          ${{ stats.totalPledged.toLocaleString() }}
        </h3>
        <p class="text-sm text-dark-gray">
          of ${{ stats.totalToPledge.toLocaleString() }} backed
        </p>
      </div>
      <div class="px-10">
        <h3 class="pb-1 text-3xl font-bold">
          {{ stats.totalBackers.toLocaleString() }}
        </h3>
        <p class="text-sm text-dark-gray">total backers</p>
      </div>
      <div class="px-10">
        <h3 class="pb-1 text-3xl font-bold">{{ stats.daysLeft }}</h3>
        <p class="text-sm text-dark-gray">days left</p>
      </div>
    </div>
    <div class="w-full h-4 mt-10 overflow-hidden bg-gray-200 rounded-lg">
      <div
        class="h-full rounded-lg bg-moderate-cyan"
        :style="{ width: raised + '%' }"
      ></div>
    </div>
  </ProductCardWrapper>
</template>

<script>
import ProductCardWrapper from "./ProductCardWrapper";
export default {
  components: {
    ProductCardWrapper
  },
  props: ["stats"],
  computed: {
    raised() {
      return (
        (this.$props.stats.totalPledged / this.$props.stats.totalToPledge) * 100
      );
    }
  }
};
</script>
