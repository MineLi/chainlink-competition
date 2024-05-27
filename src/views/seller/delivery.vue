<template>
  <div class="min-w-[800px] p-[40px]">
    <div class="bg-white rounded-xl shadow border flex flex-col items-center p-[40px] h-[calc(100vh-100px)]">
      <div class="font-bold text-[32px]">Delivery Form</div>
      <div class="flex border rounded-md mt-[20px] p-[50px]">
        <div class="flex flex-col items-center">
          <img class="w-[400px] h-[300px]" src="" alt="">
          <span class="text-[24px] mt-[20px]">NFT Name: Red Wine #123</span>
          <span class="text-[16px] mt-[20px]">Transaction Tx: ladjalsjd34e120209123901239012390</span>
        </div>
        <div class="flex flex-col ml-[20px] w-[400px]">
          <el-form :model="form" label-width="auto">
            <el-form-item label="Receiver">
              <el-input v-model="form.receiver" />
            </el-form-item>
            <el-form-item label="Tel:">
              <el-input v-model="form.tel" />
            </el-form-item>
            <el-form-item label="Address:">
              <el-input v-model="form.address" type="textarea" rows="6"/>
            </el-form-item>
            <el-form-item>
              <el-button class="ml-[80px]" type="primary" @click="onSubmit">Submit</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  receiver: '',
  tel: '',
  address: ''
})
const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang='scss' scoped>

</style>