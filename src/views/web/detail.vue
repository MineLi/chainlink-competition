<template>
  <div class="min-w-[800px] p-[40px]">
    <div class="bg-white rounded-xl shadow border flex flex-col items-center p-[40px] h-[calc(100vh-100px)]">
      <div class="font-bold text-[32px]">NFT NAME</div>
      <div class="border rounded-md flex flex-col items-center mt-[20px] p-[20px]">
        <img class="w-[500px] h-[300px]" src="" alt="">
        <span class="text-[24px] mt-[20px]">NFT Name: Red Wine #123</span>
        <el-button type="primary" class="!w-[160px] mt-[20px]" v-if="!hasFinished">Buy</el-button>
        <template v-else>
          <span class="text-[16px] mt-[20px]">Transaction Tx: ladjalsjd34e120209123901239012390</span>
          <el-button type="primary" class="!w-[160px] mt-[20px]">Finish</el-button>
        </template>
      </div>
    </div> 
  </div>
</template>

<script setup>
import { ref } from "vue";

const hasFinished = ref(true);
</script>

<style lang='scss' scoped>

</style>