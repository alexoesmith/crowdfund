<template>
  <div>
    <TheHeader />
    <Banner />
    <div class="pb-20 space-y-6">
      <ProductIntro @handle-modal="handleModal" />
      <ProductStats :stats="productStats" />
      <ProductInfo>
        <ProductTier
          v-for="product in products"
          :key="product.id"
          :product="product"
          @handle-modal="handleModal"
          @select-reward="selectReward"
        />
      </ProductInfo>
    </div>
    <ProductModal v-show="showModal" @handle-modal="handleModal">
      <ProductTierModal
        v-for="product in products"
        :key="product.id"
        :product="product"
        :selected="selectedReward"
        @select-reward="selectReward"
        @set-data="handleData"
        @handle-success-modal="handleSuccessModal"
      />
    </ProductModal>
    <SuccessModal
      v-show="showSuccess"
      @handle-success-modal="handleSuccessModal"
    />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import Banner from "../components/Banner.vue";
import ProductIntro from "../components/ProductIntro.vue";
import ProductStats from "../components/ProductStats.vue";
import ProductInfo from "../components/ProductInfo.vue";
import ProductTier from "../components/ProductTier.vue";
import ProductTierModal from "../components/ProductTierModal.vue";
import ProductModal from "../components/ProductModal.vue";
import SuccessModal from "../components/SuccessModal.vue";

export default {
  components: {
    TheHeader,
    Banner,
    ProductIntro,
    ProductStats,
    ProductInfo,
    ProductTier,
    ProductModal,
    ProductTierModal,
    SuccessModal
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
      },
      showModal: false,
      showSuccess: false,
      selectedReward: 0
    };
  },
  methods: {
    handleModal() {
      this.showModal = !this.showModal;
      this.selectedReward = 0;
    },
    handleSuccessModal() {
      this.showSuccess = !this.showSuccess;
    },
    constrainBody() {
      const body = document.body;
      if (this.showSuccess || this.showModal) {
        body.classList.add("overflow-hidden");
      } else {
        body.classList.remove("overflow-hidden");
      }
    },
    selectReward(id) {
      this.selectedReward = id;
    },
    handleData(productId, amountPledged) {
      this.productStats.totalBackers++;
      this.productStats.totalPledged =
        this.productStats.totalPledged + parseInt(amountPledged);
      this.showModal = false;
      this.products[productId - 1].amountLeft--;
    }
  }
};
</script>
