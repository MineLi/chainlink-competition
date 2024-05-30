<template>
  <div>
    <el-button @click="actionMintNew">Mint New</el-button>
    <el-button @click="actionMyNFT">My NFT</el-button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
function actionMintNew() {
  router.push({
    name: "buyerNftDetail"
  })
}

function actionMyNFT() {
  router.push({
    name: "buyerDetail"
  })
}
</script>

<style lang='scss' scoped>

</style>