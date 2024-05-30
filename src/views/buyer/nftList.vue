<template>
<div class="p-[40px]">
  <el-tabs v-model="activeName">
    <el-tab-pane label="MY NFT（未開瓶)" name="first">
      <el-button @click="mintNewNft" type="primary" class="ml-[10px]">Mint New</el-button>
      <div class="min-w-[800px]">
        <div class="bg-white rounded-xl p-[10px] flex flex-wrap gap-[20px]">
          <div v-for="item in 4" :key="item" class="flex flex-col border min-w-[300px] shadow rounded-xl flex-1 overflow-hidden p-[20px]">
            <img src="" class="w-full h-[200px]" alt="">
            <div class="text-[16px] font-bold mt-4">NFT Name: RED WINE #123</div>
            <el-button type="primary" class="!w-[100px] m-auto mt-4">Withdraw</el-button>
          </div>
          <div v-for="item in 5" :key="item" class="flex min-w-[300px] h-[0px] flex-1 p-[20px]">
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="MY NFT（已開瓶)" name="second">
      <div class="min-w-[800px]">
        <div class="bg-white rounded-xl p-[10px] flex flex-wrap gap-[20px]">
          <div v-for="item in 4" :key="item" class="flex flex-col border min-w-[300px] shadow rounded-xl flex-1 overflow-hidden p-[20px]">
            <img src="" class="w-full h-[200px]" alt="">
            <div class="text-[16px] font-bold mt-4">NFT Name: RED WINE #123</div>
          </div>
          <div v-for="item in 5" :key="item" class="flex min-w-[300px] h-[0px] flex-1 p-[20px]">
          </div>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script setup>
import { ref } from "vue";
const activeName = ref("first")
import { useRouter } from "vue-router"
const router = useRouter()
function mintNewNft() {
  router.push({
    name: 'buyerNftDetail'
  })
}
</script>

<style lang='scss' scoped>

</style>