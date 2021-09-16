<template>
  <div>
    <TheHeader />
    <Banner />
    <div class="space-y-6">
      <ProductIntro />
      <ProductStats :stats="productStats" />
      <ProductInfo>
        <ProductSelect
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </ProductInfo>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import Banner from "../components/Banner.vue";
import ProductIntro from "../components/ProductIntro.vue";
import ProductStats from "../components/ProductStats.vue";
import ProductInfo from "../components/ProductInfo.vue";
import ProductSelect from "../components/ProductSelect.vue";

export default {
  components: {
    TheHeader,
    Banner,
    ProductIntro,
    ProductStats,
    ProductInfo,
    ProductSelect
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Bamboo Stand",
          pledgeAmount: 25,
          body:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special backer memer list.",
          amountLeft: 101
        },
        {
          id: 2,
          title: "Black Edition Stand",
          pledgeAmount: 75,
          body:
            "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our backer member list. Shipping is included.",
          amountLeft: 64
        },
        {
          id: 3,
          title: "Mahagony Special Edition",
          pledgeAmount: 200,
          body:
            "You get two Special Editon Mahagony stands, a backet T-shirt, and a personal thank you. You'll be added to our backer member list. Shipping is included.",
          amountLeft: 0
        }
      ],
      productStats: {
        totalPledged: 89914,
        totalToPledge: 100000,
        totalBackers: 5007,
        daysLeft: 56
      }
    };
  }
};
</script>
