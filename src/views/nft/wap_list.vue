<template>
  <div class="flex flex-col p-[20px] pt-[10px]">
    <div v-for="item in 10" :key="item" class="flex mt-[10px] shadow-md p-2 rounded-md">
      <div class="w-[80px] h-[80px] bg-[#eee] mr-[10px]"></div>
      <div class="flex flex-col flex-1">
        <span class="font-bold text-[20px]">NFT#123</span>
        <span class="text-[14px]">dssaaaaaaafsafff sdfsafsdf dssaaaaaaafsafff dssaaaaaaafsafff</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang='scss' scoped>
</style>