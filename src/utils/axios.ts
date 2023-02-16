import axios, { AxiosInstance } from 'axios'
import router from '../router/index'

const instance = axios.create({})

instance.interceptors.request.use(request => {
  const pikpakLogin = JSON.parse(window.localStorage.getItem('pikpakLogin') || '{}')
  request.headers = request.headers || {}
  if (pikpakLogin.access_token) {
    request.headers['Authorization'] = `${pikpakLogin.token_type || 'Bearer'} ${pikpakLogin.access_token}`
  }
  if(request.url?.indexOf('https://', 4) === -1) {
    const proxyArray = JSON.parse(window.localStorage.getItem('proxy') || '[]')
    if (proxyArray.length > 0) {
      const index = Math.floor((Math.random() * proxyArray.length))
      request.url = proxyArray[index] + '/' + request.url
    }
  }
  return request
})
let isLoginLoading = false
instance.interceptors.response.use(response => {
  return response
}, (error) => {
  const { response, config } = error
  if(response.status) {
    switch (response.status) {
      case 401:
        console.log(1)
        // router.push('/login')
        const loginData = window.localStorage.getItem('pikpakLoginData')
        const loginDataJson = loginData ? JSON.parse(loginData) : {}
        if(loginDataJson.username && loginDataJson.password && !isLoginLoading) {
          console.log('wait', config.url)
          isLoginLoading = true
          return instance.post('https://user.mypikpak.com/v1/auth/signin', {
            "captcha_token": "",
            "client_id": "YNxT9w7GMdWvEOKa",
            "client_secret": "dbw2OtmVEeuUvIptb1Coyg",
            ...loginDataJson
          })
            .then((res:any) => {
              if(res.data && res.data.access_token) {
                window.localStorage.setItem('pikpakLogin', JSON.stringify(res.data))
              }
              isLoginLoading = false
              return instance(config)
            })
            .catch(() => {
              router.push('/login')
              return false
            })
        } else if(loginDataJson.username && loginDataJson.password && isLoginLoading) {
          return new Promise((resolve, reject) => {
            const s = setInterval(() => {
              if(!isLoginLoading) {
                clearInterval(s)
                resolve(instance(config))
              }
            }, 100)
          })
        } else {
          router.push('/login?redirect=' + router.currentRoute.value.fullPath)
          return Promise.reject(error)
        }
        
        break;
      // case 400:  case 403:
      //   window.$message.error(response.data.error_description || '出错了')
      default:
        window.$message.error(response?.data?.error_description || '出错了')
        break;
    }
  }
  console.log(config.url, 111)
  return Promise.reject(error)
})

const instance2 = axios.create({})
instance2.interceptors.request.use(request => {
  request.headers = {
    Authorization: 'Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt',
    'Notion-Version': '2021-08-16',
    'Content-Type': 'application/json'
  }
  const proxyArray = JSON.parse(window.localStorage.getItem('proxy') || '[]')
  if (proxyArray.length > 0) {
    const index = Math.floor((Math.random() * proxyArray.length))
    request.url = proxyArray[index] + '/' + request.url
  }
  return request
})

export async function asyncPool (poolLimit:number, array:any, iteratorFn:Function) {
  const ret:any = []
  const executing:any = []
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item))
    ret.push(p)
    if (poolLimit <= array.length) {
      const e:any = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e)
      if (executing.length >= poolLimit) {
        await Promise.race(executing)
      }
    }
  }
  return Promise.all(ret)
}

export const notionHttp = instance2
export default instance
