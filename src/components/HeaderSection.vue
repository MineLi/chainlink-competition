<template>
  <!-- is-sticky -->
  <div class="sticky top-0 bg-white z-[1001]">
    <div class="container flex items-center ">
      <router-link to="/" class="logo-link">
        <img class="logo-dark logo-img" :src="require('@/assets/images/whisky/logo-black.png')" alt="logo" />
      </router-link>
      <div class="nav-height ml-auto">
        <div class="inner">
          <ul
            data-breakpoint="1025"
            class="flex gap-4 lg-screen"
          >
            <li class="link menu-timeline">
              <a class="ajax-link v-router" :class="{ active: menuIsActive === 'buyerDashboard' }" href="/">
                <div class="before-span"><span data-hover="Home">Home</span></div>
              </a>
            </li>
            <!-- <li class="link menu-timeline">
              <a
                class="ajax-link v-router"
                :class="{ active: menuIsActive === 'contact' }"
                href="/contact"
              >
                <div class="before-span"><span data-hover="Contact">Contact Us</span></div>
              </a>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="header-wrap ml-[20px]">
        <Avatar class=""/>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import Avatar from "./Avatar.vue";
import store from "@/x/store"
const isLogin = computed(() => store.getters.isLogin)
import { useRoute } from "vue-router";
const route = useRoute();
// 菜单是否激活
const menuIsActive = route.name;
onMounted(() => {
  /*  =======================================================
    Sticky navbar on scroll down
  ========================================================== */
  const _navbar_fixed = 'has-fixed';
  function stickyMenu(selector) {
    let elem = document.querySelectorAll(selector);
    if(elem.length > 0){
      elem.forEach(item => {
        let _item_offset = item.offsetTop;
        window.addEventListener("scroll", function () {
          if(window.scrollY > _item_offset){
            item.classList.add(_navbar_fixed);
          }else{
            item.classList.remove(_navbar_fixed);
          }
        });
      });
    }
  }
  stickyMenu('.is-sticky');
})
// export default {
//   components: {
//     Avatar,
//   },
//   name: "HeaderSection",
//   computed: {
//     isLogin() {
//       return this.$store.getters.isLogin;
//     },
//   },
//   mounted() {
//     /*  =======================================================
//       Sticky navbar on scroll down
//     ========================================================== */
//     const _navbar_fixed = 'has-fixed';
//     function stickyMenu(selector) {
//       let elem = document.querySelectorAll(selector);
//       if(elem.length > 0){
//         elem.forEach(item => {
//           let _item_offset = item.offsetTop;
//           window.addEventListener("scroll", function () {
//             if(window.scrollY > _item_offset){
//               item.classList.add(_navbar_fixed);
//             }else{
//               item.classList.remove(_navbar_fixed);
//             }
//           });
//         });
//       }
//     }
//     stickyMenu('.is-sticky');
//   }
// };
</script>
<style scoped lang="scss">
.ajax-link {
  &.active{
    @apply underline underline-offset-4 text-[#333];
  }
}
.test-msg {
  width: 100%;
  // height:30px;
  background-color: #fed03d;
  color: #000000;
  text-align: center;
}

.ethPriceClass {
  width: 100%;
  color: #222;
  font-weight: bold;
}

.ethPriceClass ul {
  list-style: none;
}

.ethPriceClass ul li {
  margin-left: 10px;
  margin-right: 20px;
  display: inline-block;
}

.ethPriceClass ul li span {
  color: #fed03d;
}
</style>
