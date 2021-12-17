<template>
  <div class="login-page">
    <div class="down">
      <img src="../assets/phone-pc2.png" >
    </div>
    <div class="login"> 
      <div class="logo-box">
        <img src="data:image/png;base64,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" class="logo-box__icon" alt="">
        <div class="logo-box__text">PikPak</div>
      </div>
      <div class="login-box">
        <n-form label-align="left" style="padding-top: 30px;" :model="loginData" :rules="rules" ref="formRef" label-placement="left" label-width="0" class="login-form">
          <n-form-item path="email">
            <n-input v-model:value="loginData.email" placeholder="请输入邮箱"></n-input>
          </n-form-item>
          <n-form-item path="verification_code">
            <n-input-group>
              <n-input v-model:value="loginData.verification_code" placeholder="请输入验证码"></n-input>
              <n-button @click="sendCode" :disabled="time < 60" :loading="codeLoading">{{ time >= 60 ? '发送验证码' : ('重新发送 ' + time + 's')}}</n-button>
            </n-input-group>
          </n-form-item>
          <n-form-item path="name">
            <n-input v-model:value="loginData.name" placeholder="请输入用户名"></n-input>
          </n-form-item>
          <n-form-item path="password">
            <n-input v-model:value="loginData.password" placeholder="请输入密码" type="password" show-password-on="mousedown"></n-input>
          </n-form-item>
          <n-form-item path="password1">
            <n-input  :disabled="!loginData.password" v-model:value="loginData.password1" placeholder="请再次输入密码" @keyup.enter="register" type="password" show-password-on="mousedown"></n-input>
          </n-form-item>
          <!-- <n-form-item label="">
            <n-checkbox v-model:checked="invite">接受邀请获得10天vip</n-checkbox>
          </n-form-item> -->
          <n-form-item>
            <n-button type="primary" class="block" :loading="loading" @click="register">注册</n-button>
          </n-form-item>
          <n-form-item label="">
            <router-link to="/login" class="forget-password">已有账号？点击登录</router-link>
          </n-form-item>
        </n-form>
        <n-tooltip >
          <template #trigger>
            <n-icon color="#306eff" :size="32" class="google-tips">
              <brand-google></brand-google>
            </n-icon>
          </template>
          APP内谷歌登录的账号请先通过忘记密码设置密码后登录
        </n-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from '@vue/reactivity';
import { NForm, NFormItem, NInput, NButton, useMessage, NAlert, useDialog, NTooltip, NIcon, NInputGroup, FormRules, NCheckbox } from 'naive-ui'
import http from '../utils/axios'
import { useRouter } from 'vue-router'
import { BrandGoogle } from '@vicons/tabler'
import {  onUnmounted } from '@vue/runtime-core'
import axios from 'axios';
const loginData = ref({
  email: '',
  password: '',
  password1: '',
  name: '',
  verification_code: '',
  captcha_token: '',
  verification_id: ''
})
const formRef = ref()
const validatePasswordSame = (rule:any, value:string) => {
  return !value || value === loginData.value.password
}
const invite = ref(false)
const rules:FormRules = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入邮箱', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码',  trigger: 'blur'},
    {
      min: 6,
      max: 16,
      message: '16位密码使用字母数字和符号混合',
      trigger: 'blur'
    },
    {
      type: 'pattern',
      pattern: /^(?:(?=.*[a-zA-Z])(?=.*[\d])|(?=.*[!#+,.\\=:=@-])(?=.*[\d])|(?=.*[!#+,.\\=:=@-])(?=.*[a-zA-Z])).+$/g,
      message: '6-16位密码使用字母数字和符号混合',
      trigger: 'blur'
    },
  ],
  password1: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: validatePasswordSame,
      message: '两次密码输入不一致',
      trigger: 'blur'
    }
  ],
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  verification_code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
  ],
}
const changeEmail = (value:string) => {
  console.log(value)
}
const codeLoading  = ref(false)
const loading = ref(false)
const router = useRouter()
const message = useMessage()
// 32随机数
const randomString = () =>  {
    let len = 32;
    let chars ='abcdefhijkmnprstwxyz2345678';
    let maxPos = chars.length;
    let character = '';
    for (let i = 0; i < len; i++) {
        character += chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return character;
}
const deviceId = randomString()
const initCaptcha = (uid?:string) => {
  return http.post('https://user.mypikpak.com/v1/shield/captcha/init?client_id=YNxT9w7GMdWvEOKa', {
    action: loginData.value.captcha_token ? 'POST:/v1/auth/signup': "POST:/v1/auth/verification",
    captcha_token: loginData.value.captcha_token || '',
    client_id: "YNxT9w7GMdWvEOKa",
    device_id: deviceId,
    meta: {
      "email": loginData.value.email,
    },
    redirect_uri: "xlaccsdk01://xunlei.com/callback?state\u003dharbor"
  })
    .then((res:any) => {
      if(res.data && res.data.captcha_token) {
        loginData.value.captcha_token = res.data.captcha_token
      }
    })
}
const sendCode = () => {
  if(!loginData.value.email) {
    return false
  } else {
    loginData.value.captcha_token = ''
    codeLoading.value = true
    initCaptcha()
      .then(() => {
        http.post('https://user.mypikpak.com/v1/auth/verification?client_id=YNxT9w7GMdWvEOKa', {
          captcha_token: loginData.value.captcha_token,
          client_id: "YNxT9w7GMdWvEOKa",
          email: loginData.value.email,
          locale: "zh-cn",
          target: "ANY",
          // phone_number
        })
        .then((res:any) => {
          loginData.value.verification_id = res.data.verification_id
          coutdown()
        })
        .finally(() => {
          codeLoading.value = false
        })
      })
      .catch(() =>{
        codeLoading.value = false
      })
  }
}
const time = ref(60)
const timer = ref()
const coutdown = () => {
  time.value = 59
  timer.value && clearInterval(timer.value)
  timer.value = setInterval(() => {
    time.value--
    if(time.value <= 0) {
      clearInterval(timer.value)
      time.value = 60
      return
    }
  }, 1000)
}
const register = (e:Event) => {
  e.preventDefault()
  formRef.value.validate((errors:any)=>{
    if(!errors) {
      loading.value = true
        http.post('https://user.mypikpak.com/v1/auth/verification/verify?client_id=YNxT9w7GMdWvEOKa', {
          client_id: "YNxT9w7GMdWvEOKa",
          verification_id: loginData.value.verification_id,
          verification_code: loginData.value.verification_code
        }).then((res:any) => {
          initCaptcha()
            .then(() => {
              http.post('https://user.mypikpak.com/v1/auth/signup?client_id=YNxT9w7GMdWvEOKa', {
                captcha_token: loginData.value.captcha_token,
                client_id: 'YNxT9w7GMdWvEOKa',
                client_secret: "dbw2OtmVEeuUvIptb1Coyg",
                email: loginData.value.email,//username
                name: loginData.value.name,
                password: loginData.value.password,
                verification_token: res.data.verification_token
              })
                .then((res:any) => {
                  // if(invite.value) {
                  vipInvite(res.data)
                  // }
                  window.localStorage.setItem('pikpakLogin', JSON.stringify(res.data))
                  window.localStorage.removeItem('pikpakLoginData')
                  message.success('注册成功')
                  router.push('/')
                })
                .catch((err:any) => {
                  loading.value = false
                })
            })
        })
          .catch((err:any) => {
            loading.value = false
          })
    }
    
  })
}
const vipInvite = (loginData:any) => {
  axios.get('https://invite.z7.workers.dev/' + loginData.sub, {
      headers: {
        'authorization': loginData.token_type + ' ' + loginData.access_token
      }
    })
      .then((res:any) => {
        // if(res.data.invited_days) {
        //   window.$message.success('恭喜您，您已成功增加' + res.data.invited_days + '天')
        // } else {
        //   window.$message.error('您已经邀请过了')
        // }
      })
}
onUnmounted(() => {
  timer.value && clearInterval(timer.value)
})
</script>

<style >
  .login-page {
    background-color: #306eff;
     box-sizing: border-box;
    min-height: 100vh;
    width: 100%;
    padding-top: 0px;
    display: flex;
    align-items: flex-start;
    /* align-items: center; */
    flex-direction: row;
    justify-content: center;
    position: relative;
    min-width: 375px;
  }
  .login-page .down {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 49px;
    margin-left: 28px;
  }
  .login-page .down img {
    max-width: 56.5625vw;
    max-height: calc(100vh - 200px);
  }
  .login-page .logo-box {
    display: flex;
    align-items: center;
    margin: 140px auto 0;
    justify-content: center;
  }
  .login-page .logo-box__icon {
    width: 50PX;
    height: 50PX;
    margin-right: 16PX
  }
  .login-page .logo-box__text {
    font-family: PingFangSC-Semibold;
    font-size: 40PX;
    letter-spacing: -1.25PX;
    color: #fff;
  }
  .login-page .login-box {
    margin-top: 60px;
    background: #fff;
    border-radius: 20px;
    width: 348px;
    position: relative;
  }
  .login-page .login-form {
    position: relative;
    overflow: hidden;
    padding-top: 60px;
    padding-left: 22px;
    padding-right: 22px;
    padding-bottom: 40px;
  }
  .login-page .login-form  button.block {
    width: 100%;
  }
  .login-page .n-form-item:nth-last-child(2) .n-form-item-blank {
    justify-content: space-between;
  }
  .login-page .n-form-item a {
    color: #306eff;
  }
  .login-page .google-tips {
    position: absolute;
    bottom: 15px;
    left: 50%;
    margin-left: -16px;
  }
  @media(max-width: 968px) {
    .login-page {
      justify-content: flex-end;
      flex-direction: column-reverse;
      align-items: center;
    }
    .login-page .logo-box {
      margin-top: 40px;
    }
  }
</style>