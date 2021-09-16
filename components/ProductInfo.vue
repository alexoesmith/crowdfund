<template>
  <ProductCardWrapper>
    <h4 class="pb-4 text-2xl font-bold">About this project</h4>
    <p class="pb-4 leading-relaxed text-dark-gray">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
      cupiditate in molestiae nemo odio, atque nulla exercitationem sed! Neque
      nesciunt, sit enim vel molestias obcaecati minima exercitationem non
      doloremque blanditiis consequatur doloribus. Laboriosam sit reiciendis
      architecto? Magnam blanditiis laudantium sunt?
    </p>
    <p class="leading-relaxed text-dark-gray">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
      necessitatibus libero vel perspiciatis quasi vero consequatur suscipit
      omnis exercitationem tempore?
    </p>
    <div class="pt-10 space-y-4">
      <slot></slot>
    </div>
  </ProductCardWrapper>
</template>

<script>
import ProductCardWrapper from "./ProductCardWrapper.vue";
export default {
  components: {
    ProductCardWrapper
  }
};
</script>
