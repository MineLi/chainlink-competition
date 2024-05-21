<template>
  <div>
    <!-- 顶部选择登录方式 -->
    <div class="login-type-container">
      <div class="login-type">
        <div
          class="login-type-item active"
        >Password Login</div>
      </div>
    </div>
    <el-form ref="loginForm" :model="form" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model.trim="form.username" placeholder="Please input username" :maxlength="11">
          <template #prepend>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="password-container" prop="password">
          <el-input v-model.trim="form.password" type="password" placeholder="Please input password">
            <template #prepend>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleSubmit">
          <span>Login Now</span>
        </el-button>
        <div style="text-align: center;">
          No Account？<el-link target="_blank" :underline='false' @click="$emit('changeType')">Regist now</el-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { debounce } from 'lodash'
export default {
  name: 'LoginForm',
  props: {},
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      time: 0,
      rules: {
        username: { required: true, message: '用户名不能为空', trigger: 'blur' },
        password: { required: true, message: '密码不能为空', trigger: 'blur' }
      }
    }
  },
  methods: {
    handleSubmit: debounce(function() {
      this.$refs.loginForm.validate((valid) => {
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
  margin-bottom: 92px;
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
  margin-top: 60px;
  font-size: 16px;
  .icon {
    margin-left: 5px;
  }
}

.password-container {
  // display: flex;
}
</style>
