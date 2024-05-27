<template>
  <div class="min-w-[800px] p-[40px]">
    <div class="bg-white rounded-xl p-[40px] flex flex-wrap gap-[20px]">
      <div v-for="item in 20" :key="item" class="flex flex-col border min-w-[300px] shadow rounded-xl flex-1 overflow-hidden p-[20px]">
        <img src="" class="w-full h-[200px]" alt="">
        <div class="text-[16px] font-bold mt-4">NFT Name: RED WINE #123</div>
        <el-button type="primary" class="!w-[100px] m-auto mt-4"> Buy </el-button>
      </div>
      <div v-for="item in 5" :key="item" class="min-w-[300px] h-[0px]"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang='scss' scoped>

</style>