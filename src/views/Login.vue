<template>

  <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
      <div class="row d-flex">
        <div class="col-lg-6">
          <div class="card1 pb-5">
            <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
              <img src="../assets/images/login.png" class="image">
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <h2 class="mt-5 text-large text-center">登入</h2>
          <el-tabs type="border-card">
            <div class="card border-0 px-4 py-5">
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">帳號</h6>
                </label>
                <input class="mb-4" type="text" name="accountAD" v-model="accountAD" placeholder="Enter account"
                  autocomplete="off" v-on:keyup.enter="loginAD">
              </div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">密碼</h6>
                </label>
                <input type="password" name="passwordAD" v-model="passwordAD" placeholder="Enter password"
                  autocomplete="off" v-on:keyup.enter="loginAD">
              </div>
              <div class="row justify-content-start px-3 mb-4">
                <div class="col-2">
                  <el-checkbox v-model="isRememberMe" class="rememberMe">記住我</el-checkbox>
                </div>
                <div class="col-2">
                  <el-button @click="fakeLogin" class="">假登入</el-button>
                </div>
              </div>
              <div class="row mb-3 px-3">
                <button type="submit" class="btn bg-primary text-white text-center"
                  @click.prevent="loginAD">Login</button>
              </div>
              <el-alert :title="errMessage" type="error" v-if="isError" />

            </div>

          </el-tabs>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { axios } from 'axios';

const router = useRouter()
const route = useRoute()

let accountAD = ref('')
let passwordAD = ref('')
let isError = ref(false)
let errMessage = ref('')
let isRememberMe = ref(false)

onMounted(() => {
  let account = localStorage.getItem('account')
  if (account) {
    accountAD = account
    // TODO: yarn add base64
    // loginForm.password = Base64.decode(localStorage.getItem('password'))
    passwordAD = localStorage.getItem('password')
    isRememberMe = true
  }
})

const fakeLogin = () => {
  localStorage.setItem('user', JSON.stringify('tony'))
  router.push("/home")
}

const loginAD = async () => {
  const ADAccount = String(accountAD).toUpperCase()
  const Pwd = passwordAD
  const api = '/Login/Login'
  const json = {
    Token: '',
    Language: 'zh-TW',
    Data: {
      ADAccount, Pwd
    }
  }

  try {
    const { data } = await axios.post(api, json)

    if (data.ReturnCode === '0000') {
      localStorage.setItem('user', JSON.stringify(ADAccount))
      if (isRememberMe) {
        localStorage.setItem('account', ADAccount)
        localStorage.setItem('password', Pwd)
      } else {
        localStorage.removeItem('account')
        localStorage.removeItem('password')
      }

      isError = false
      router.push("/home")
    } else {
      isError = true
      errMessage = data.ReturnMsg
      // ReturnCode: "1201"
      // ReturnMsg: "AD 認證失敗:使用者名稱或密碼不正確。\r\n"
      logout();
    }
  } catch (error) {
    console.log(error);
    isError = true
    errMessage = 'LoginAD failed'
    logout();
  }
}

const logout = () => {
  localStorage.removeItem('user')
}
</script>

<style scoped>
body {
  color: #000;
  overflow-x: hidden;
  height: 100%;
  background-color: #B0BEC5;
  background-repeat: no-repeat;
}

.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
}

.border-line {
  border-right: 1px solid #EEEEEE;
}

.text-sm {
  font-size: 20px !important;
}

::placeholder {
  color: #545252;
  opacity: 1;
  font-weight: 300
}

:-ms-input-placeholder {
  color: #616161;
  font-weight: 300
}

::-ms-input-placeholder {
  color: #BDBDBD;
  font-weight: 300
}

input,
textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2C3E50;
  font-size: 14px;
  letter-spacing: 1px;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304FFE;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

@media screen and (max-width: 991px) {
  .border-line {
    border-right: none;
  }
}
</style>
