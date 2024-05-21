<template>
  <div>
    <!-- 顶部选择登录方式 -->
    <div class="login-type-container">
      <div class="login-type">
        <div
          class="login-type-item active"
        >Register</div>
      </div>
    </div>
    <el-form ref="registerForm" :model="form" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model.trim="form.username" placeholder="Please input username" :maxlength="11">
          <template #prepend>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input v-model.trim="form.email" placeholder="Please input email">
          <template #prepend>
            <el-icon><Eleme /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="password-container" prop="password">
        <el-input v-model.trim="form.password" placeholder="Please input password" type="password">
          <template #prepend>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="password-container" prop="repassword" >
        <el-input v-model.trim="form.repassword" placeholder="Please input password again" type="password">
          <template #prepend>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleSubmit">
          <span>Register and login</span>
        </el-button>
        <div style="text-align: center;">
          has Account？<el-link target="_blank" :underline='false' @click="$emit('changeType')">Login now</el-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { debounce } from 'lodash'
export default {
  name: 'registerForm',
  props: {},
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('please input password'))
      } else if (value.length < 6) {
        callback(new Error('password length must not be less than 6 bits'))
      } else {
        if (this.form.repassword !== '') {
          this.$refs.registerForm.validateField('repassword')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('please input password again'))
      } else if (value !== this.form.password) {
        callback(new Error('Two entered passwords do not match!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        email: '',
        password: '',
        repassword: ''
      },
      time: 0,
      rules: {
        username: { required: true, message: 'username is required', trigger: 'blur' },
        email: [
          { required: true, message: 'email is required', trigger: 'blur' },
          { pattern: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, message: 'wrong email', trigger: 'blur' }
        ],
        password: { validator: validatePass, trigger: 'blur' },
        repassword: { validator: validatePass2, trigger: 'blur' }
      }
    }
  },
  methods: {
    handleSubmit: debounce(function() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', this.form)
        }
      })
    }, 300)
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  margin-top: 6px;
  color: rgba(0, 0, 0, 0.65);
}
.login-type-container {
  margin-bottom: 50px;
}
.login-type {
  display: flex;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 18px;
  &-item {
    position: relative;
    flex: 1;
    padding-bottom: 6px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s all;
    &::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      display: block;
      width: 0;
      height: 0;
      background: #1890ff;
      border-radius: 3px;
      transform: translateX(-50%);
      transition: 0.3s all;
      content: " ";
    }
    &.active {
      color: #1890ff;
      &::after {
        width: 38px;
        height: 3px;
      }
    }
    &.disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  }
}

.login-btn {
  width: 100%;
  margin-top: 30px;
  font-size: 16px;
  .icon {
    margin-left: 5px;
  }
}

.password-container {
  // display: flex;
}
</style>
