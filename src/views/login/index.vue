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


  &.mobile {
    right: 0;
    #{$login}-form {
      width: 400px;
    }
  }
}
</style>
