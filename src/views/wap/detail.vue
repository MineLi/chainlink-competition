<template>
  <div class="flex flex-col p-[20px] pt-[10px]">
    <div class="w-full h-[200px] bg-[#eee]">
      <img class="w-full h-auto" src="" alt="">
    </div>
    <div class="font-bold text-[20px] mt-2">NFT Name: RED WIN #314</div>
    <div class="text-[18px] mt-2">Current Price: 0.5ETH</div>
    <!-- <el-button type="primary" class="mt-6 w-[fit-content] m-auto !px-[40px]">Open it</el-button> -->
  </div>
  <el-collapse>
    <el-collapse-item title="" name="1">
      <template v-slot:title>
        <div class="pl-[20px]">Opened NFT</div>
      </template>
      <div class="flex flex-col p-[20px] pt-[10px]">
        <div class="font-bold text-[20px] mt-2">NFT Name: OPENED NFT #001</div>
        <div class="text-[18px] mt-2">Parity: Legendary</div>
        <div class="w-full h-[200px] bg-[#eee]">
          <img class="w-full h-auto" src="" alt="">
        </div>
        <el-button type="primary" class="mt-6 w-[fit-content] m-auto !px-[40px]">Done!</el-button>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
</script>

<style lang='scss' scoped></style>