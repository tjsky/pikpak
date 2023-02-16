<template>
  <div class="list-page">
    <n-collapse :default-expanded-names="['-1', '0', '2', '3','4']">
      <n-collapse-item name="-1" >
        <template #header>
          绑定telegram   <a @click.stop="" href="https://www.tjsky.net/?p=220#Telegram" target="_blank"> <n-icon style="vertical-align: middle;" size="20" color="#d03050"><zoom-question></zoom-question></n-icon> </a>
        </template>
        <n-input v-model:value="telegramUrl" placeholder="复制telegram绑定链接到这"></n-input>
        <p></p>
        <n-button :disabled="!telegramUrl" type="primary" @click="goTelegram">Telegram绑定</n-button>
        <a href="https://t.me/PikPak_Bot" target="_blank">Telegram机器人地址</a>
      </n-collapse-item>
      <n-collapse-item name="0" title="aria2设置">
        <template #header>aria2设置   <a @click.stop="" href="https://www.tjsky.net/?p=220#arai2" target="_blank"> <n-icon style="vertical-align: middle;" size="20" color="#d03050"><zoom-question></zoom-question></n-icon> </a></template>
        <n-form label-width="100px" label-align="left" label-placement="left">
          <n-form-item label="aria2链接：">
            <n-input v-model:value="aria2Data.host" placeholder="例如http://localhost:6800/jsonrpc"></n-input>
          </n-form-item>
          <n-form-item label="aria2Token：">
            <n-input v-model:value="aria2Data.token" type="password" show-password-on="mousedown"></n-input>
          </n-form-item>
          <n-form-item label="下载服务器序号：">
            <n-input v-model:value="aria2Data.serverNumber" placeholder="替换下载链接里的服务器序号"></n-input>
          </n-form-item>
          <n-form-item label="单个文件链接数量：">
            <n-input-number v-model:value="aria2Data.batchUrlNum" placeholder="需要推送多少个链接并发下载"></n-input-number>
          </n-form-item>
          <n-form-item label="获取链接并发：">
            <n-input-number v-model:value="aria2Data.batchUrlConcurrence" placeholder="提取多个下载链接时的并发数"></n-input-number>
          </n-form-item>
          <n-form-item label="文件夹设置：">
            <n-switch v-model:value="aria2Data.dir" >
              <template #checked>选择文件夹时保存文件夹结构</template>
              <template #unchecked>选择文件夹时仅保存文件</template>
            </n-switch>
          </n-form-item>
          <n-alert title="由于浏览器限制，请按下图设置开始混合模式" type="info"  v-if="aria2Data.host && aria2Data.host.indexOf('https://') === -1 && aria2Data.host.indexOf('http://localhost') == -1 && aria2Data.host.indexOf('http://127.0.0.1') === -1">
            <img src="../assets/aria2-tip-1.png" alt=""> 
            <br />
            <br />
            <img src="../assets/aria2-tip-2.png" alt="">
          </n-alert>
          <n-form-item>
            <n-button type="primary" @click="testAria2">测试并保存</n-button>
          </n-form-item>
        </n-form>
      </n-collapse-item>
      <n-collapse-item name="1" title="自动登录设置">
        <template #header>自动登录设置   <a @click.stop="" href="https://www.tjsky.net/?p=220#i-6" target="_blank"> <n-icon style="vertical-align: middle;" size="20" color="#d03050"><zoom-question></zoom-question></n-icon> </a></template>
        <n-form label-width="100px" label-align="left" label-placement="left">
          <n-form-item label="是否开启">
            <n-switch v-model:value="loginSwitch"></n-switch>
          </n-form-item>
          <template v-if="loginSwitch">
            <n-form-item label="用户名">
              <n-input v-model:value="loginData.username" placeholder="用户名"></n-input>
            </n-form-item>
            <n-form-item label="密码">
              <n-input v-model:value="loginData.password" type="password" show-password-on="mousedown"></n-input>
            </n-form-item>
          </template>
          <n-form-item>
            <n-button type="primary" @click="loginPost">保存</n-button>
          </n-form-item>
        </n-form>
      </n-collapse-item>
      <n-collapse-item name="3" title="代理设置">
        <n-input type="textarea" v-model:value="proxyData" rows="4" placeholder="支持多个随机，一行一个，为空则不代理"></n-input>
        <p></p>
        <n-button type="primary" @click="proxyPost">保存设置</n-button>
        <n-text @click="proxyReset">恢复默认</n-text>
      </n-collapse-item>
      <n-collapse-item title="关于" name="2">
        <n-space>
          <a href="https://mypikpak.com/" target="_blank" class="n-button">官方网站</a>
          <a href="https://t.me/pikpak_userservice" target="_blank" class="n-button">官方交流群</a>
          <a href="https://github.com/tjsky/pikpak" target="_blank" class="n-button">开源仓库</a>
          <a href="https://www.tjsky.net/?p=201" target="_blank" class="n-button">部署教程</a>
          <a href="https://t.me/pikpak_userservice" target="_blank">问题反馈</a>
        </n-space>
        <br />
      </n-collapse-item>
       <n-collapse-item title="PC端IDM支持" name="4">
        <n-space>
          <a href="https://github.com/MotooriKashin/ef2/releases" target="_blank" class="n-button">地址一：下载支持插件</a>
          <a href="https://url71.ctfile.com/f/21226171-531688310-489b35" target="_blank" class="n-button">地址二：下载支持插件（密码pikpak）</a>
          <a href="https://www.tjsky.net/?p=220#PCIDM" target="_blank" class="n-button">使用教程</a><br>先用第一个下载地址，如果你实在无法访问github再使用第二个下载地址，调用IDM下载需要配合“自定义菜单”功能实现，请查看上方的使用教程        
        </n-space>
        <br />
      </n-collapse-item>
      <n-collapse-item title="功能列表" name="3">
        <n-log :lines="logs"></n-log>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import http from '../utils/axios'
import { NForm, NFormItem, NButton, NInput, NInputNumber, NCollapse, NCollapseItem, NSpace, NSwitch, useDialog, NAlert, NLog, NIcon } from 'naive-ui'
import { ZoomQuestion } from '@vicons/tabler'
import {proxy as proxyDefault} from '../config'
const logs = ref([
  '手机注册登陆',
  '添加推广下载',
  '绑定Telegram',
  '直接分享功能（下线）',
  '修改传输自动请求方式',
  '传输只显示保存中',
  '自定义菜单',
  '资源库分页，分享秒传支持文件及',
  '....'
])
const aria2Data = ref({
  host: '',
  token: '',
  dir: true,
  serverNumber: '',
  batchUrlNum: 1,
  batchUrlConcurrence: 1,
})
const testAria2 = () => {
  let postData:any = {
      id:'',
      jsonrpc:'2.0',
      method:'aria2.getGlobalStat',
      params:[]
  }
  if(aria2Data.value.token) {
    postData.params.splice(0, 0, 'token:' + aria2Data.value.token)
  }
  fetch(aria2Data.value.host, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(response => response.json())
    .then(res => {
      if(res.error && res.error.message) {
        window.$message.error(res.error.message)
      } else if(res.result) {
        window.localStorage.setItem('pikpakAria2', JSON.stringify(aria2Data.value))
        window.$message.success('保存成功')
      }
    })
    .catch(error => console.error('Error:', error))
}
const loginSwitch = ref(false)
const loginData = ref({
  username: '',
  password: ''
})
const dialog = useDialog()
const loginPost = () => {
  if(loginSwitch.value) {
    dialog.warning({
      title: '警告',
      content: '记住登陆是指浏览器本地明文保存用户名密码用于下次自动登陆，请勿在非信任设备选择',
      positiveText: '确定',
      negativeText: '不确定',
      onPositiveClick: () => {
        window.localStorage.setItem('pikpakLoginData', JSON.stringify(loginData.value))
      },
      onNegativeClick: () => {
      },
    })
  } else {
    window.localStorage.removeItem('pikpakLoginData')
  }
}
const proxyData = ref('')
const proxyPost = () => {
  let proxyValue = proxyData.value.split('\n').filter(item => item != '')
  window.localStorage.setItem('proxy', JSON.stringify(proxyValue))
  window.localStorage.setItem('isSettingProxy', 'true')
}
const proxyReset = () => {
  window.localStorage.setItem('proxy', JSON.stringify(proxyDefault))
  window.localStorage.removeItem('isSettingProxy')
  proxyData.value = proxyDefault.join('\n')
}
onMounted(() => {
  let aria2 = JSON.parse(window.localStorage.getItem('pikpakAria2') || '{}')
  if(aria2.dir === undefined) {
    aria2.dir = true
  }
  if(aria2.host) {
    aria2Data.value = aria2
  }
  let login = JSON.parse(window.localStorage.getItem('pikpakLoginData') || '{}')
  if(login.username && login.password) {
    loginData.value = login
    loginSwitch.value = true 
  }
  let proxy = JSON.parse(window.localStorage.getItem('proxy') || '[]')
  if(proxy.length) {
    proxyData.value = proxy.join('\n')
  }
})
const telegramUrl = ref()
const goTelegram = () => {
  let login = JSON.parse(window.localStorage.getItem('pikpakLogin') || '{}')
  if(!login && !login.access_token) {
    window.$message.error('请先登陆')
    return false
  }
  
  let matchArray = telegramUrl.value &&  decodeURIComponent(telegramUrl.value).match(/(^|&)token=([^&]*)(&|$)/)
  console.log(matchArray)
  if(!matchArray || !matchArray.length || matchArray.length != 4) {
    window.$message.error('请输入正确链接')
    return false
  }
  http.post('https://api-drive.mypikpak.com/user/v1/bind', {
      accessToken: login.access_token,
      thirdType: "TG",
      thirdToken: matchArray[2]
    })
    .then((res:any) => {
      telegramUrl.value = ''
      if(res.data.bound) {
        window.$message.success('绑定成功')
      } else {
        window.$message.error('绑定失败')
      }
    })
}
</script>

<style>
.list-page {
  padding: 40px;
}

@media(max-width: 968px) {
  .list-page {
    padding: 10px;
  }
}
</style>
