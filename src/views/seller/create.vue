<template>
  <div class="min-w-[800px] p-[40px]">
    <div class="bg-white rounded-xl shadow border flex flex-col items-center p-[40px] h-[calc(100vh-100px)] pt-[100px]">
      <div class="font-bold text-[32px]">Upload New Art Work</div>
      <el-form :model="form" label-width="auto">
        <div class="flex border rounded-md mt-[20px] p-[50px]">
          <div class="flex flex-col w-[600px]">
            <el-form-item label="Name:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Description:">
              <el-input v-model="form.desc" type="textarea" rows="8"/>
            </el-form-item>
            <el-form-item label="Base URL:">
              <el-input v-model="form.baseUrl"/>
            </el-form-item>
            <el-form-item label=" ">
              <el-button @click="confirmUpload" type="primary">Confirm</el-button>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: '',
  desc: '',
  baseUrl: ''
})

function confirmUpload() {
  
}

</script>

<style lang='scss' scoped>

</style>