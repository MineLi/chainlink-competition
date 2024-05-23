<template>
  <div class="min-w-[800px] p-[40px]">
    <div class="bg-white rounded-xl shadow border flex flex-col items-center p-[40px] h-[calc(100vh-100px)] pt-[100px]">
      <div class="font-bold text-[32px]">Upload New Art Work</div>
      <el-form :model="form" label-width="auto">
        <div class="flex border rounded-md mt-[20px] p-[50px]">
          <div class="flex flex-col w-[400px]">
            <el-form-item label="Name:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Description:">
              <el-input v-model="form.desc" type="textarea" rows="9"/>
            </el-form-item>
          </div>
          <div class="flex flex-col ml-[20px] w-[400px]">
            <el-form-item label="">
              <el-upload
                class="w-full"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
              >
                <!-- <el-icon class="el-icon--upload"><upload-filled /></el-icon> -->
                <div class="el-upload__text">
                  Drop ZIP images here or <em>click to upload</em>
                </div>
                <!-- <template #tip>
                  <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                  </div>
                </template> -->
              </el-upload>
            </el-form-item>
            <el-form-item label="">
              <el-upload
                class="w-full"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
              >
                <!-- <el-icon class="el-icon--upload"><upload-filled /></el-icon> -->
                <div class="el-upload__text">
                  Drop ZIP JSON file here or <em>click to upload</em>
                </div>
              </el-upload>
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
  address: ''
})
</script>

<style lang='scss' scoped>

</style>