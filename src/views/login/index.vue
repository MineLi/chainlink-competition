<!------------------------------------------- template ------------------------------------------->
<template>
  <div class="login">
    <div class="login-body">
      <div class="login-container">
        <!-- <div class="login-welcome">
          <div class="login-welcome-content">Welcome</div>
        </div> -->
        <div class="login-form" v-if="type === 'login'">
          <login-form @on-success-valid="actionLoginSubmit" @changeType='type = "register"'/>
        </div>
        <div class="login-form" v-if="type === 'register'">
          <register-form @on-success-valid="actionRegisterSubmit" @changeType='type = "login"'/>
        </div>
      </div>
    </div>
  </div>
</template>

<!-------------------------------------------- script -------------------------------------------->
<script>
import LoginForm from './login-form'
import registerForm from './register-form.vue'
import { mapActions } from 'vuex'
// import { verifyLogin } from '@/api'
// import common from '@/mixin/login'
export default {
  components: {
    LoginForm, registerForm
  },
  // mixins: [common],
  data() {
    return {
      type: 'login'
    }
  },

  /* 一.生命周期函数 */
  created() {
  },

  /* 二.监控函数 */
  watch: {
  },

  computed: {
  },

  /* 三.内部功能函数 */
  methods: {
    ...mapActions('$_USER', ['login']),
    async actionLoginSubmit(params) {
      const { code } = await this.login(params)
      if (!code) {
        this.$router.push({
          name: 'home'
        })
      }
    },
    async actionRegisterSubmit(params) {
      const { code } = await this.$apis.login.register({
        username: params.username,
        email: params.email,
        password: params.password
      })
      if (!code) {
        this.login({
          username: params.username,
          password: params.password
        })
      }
    }
  }
}
</script>

<!-------------------------------------------- style -------------------------------------------->
<style lang="scss" scoped>
$login: '.login';
#{$login} {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  &-header{
    min-height: 40px;
    background: #FFF;
  }
  &-body{
    position: relative;
    flex: 1;
    height: 100%;
    min-height: 600px;
    background-image: url('~@/assets/images/login/login-bg.png');
    background-position: center;
    background-size: cover;
  }
  &-footer{
    display: flex;
    align-items: center ;
    justify-content: center;
    min-height: 80px;
    font-size: 14px;
    background: #FFF;
  }
}
#{$login}-container{
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  height: 546px;
  overflow: hidden;
  background: #FFF;
  border-radius:6px;
  transform: translateX(-50%) translateY(-50%);

  #{$login}{
    &-welcome{
      position: relative;
      width: 322px;
      height: 546px;
      padding-left: 52px;
      color: #FFF;
      font-size: 28px;
      background: url('~@/assets/images/login/blue-bg.png');
      background-position: center;
      background-size: cover;
      &-title{
        margin-top: 58px;
      }
      &-content{
        margin-top: 99px;
        font-size:28px;
        line-height:66px;
      }
      &-footer{
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 56px;
        font-size: 14px;
        &-item {
          position: relative;
          padding: 0 24px;
        }
        .login-welcome-footer-item + .login-welcome-footer-item{
          &::before{
            position: absolute ;
            top: 50%;
            left: 0;
            display: block;
            width: 1px;
            height: 11px;
            background: #FFF;
            transform: translateY(-50%);
            content: ' ';
          }
        }
      }
    }
    &-form{
      min-width: 333px;
      max-width: 448px;
      height: 546px;
      padding: 60px 40px;
    }
  }
  &.mobile {
    right: 0;
    #{$login}-form {
      width: 400px;
    }
  }
}
</style>
