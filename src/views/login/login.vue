<template>
  <div class="login-warp">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [],
  data() {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // handleLogin() {  //登录
    //   this.$http.post('login',this.formdata)
    //   .then((res)=> {
    //     console.log(res)
    //     const {
    //       data,
    //       meta:{msg,status}
    //     } = res.data
    //     console.log('data:',data,'--','msg:',msg,'--','status:',status)
    //     // 登录成功
    //     if(status === 200) {
    //       console.log('登录成功')
    //       // this.$message({
    //       //   message: '恭喜你登录成功',
    //       //   type: 'succes'
    //       // })
    //       this.$message.success(msg)
    //       this.$router.push('/home')
    //     } else {
    //       this.$message.warning(msg)
    //     }
    //   })
    // },
    //通过 promise + async 将异步任务同步实现
    // 修改成ES6语法的  promise+async
    async handleLogin() {  //登录
      const userData = await this.getLoginMsg()
      if(userData) {
        console.log('拿到用户登录成功的用户信息userData:',userData)
        // 保存用户对应的token值  在渲染home组件之前进行判断 该用户浏览器中localstorage中是否含保存的token
        localStorage.setItem('token',userData.token)
      } else {
        console.log('没有拿到用户登录成功的用户信息userData:',userData)
        return
      }

    },
    getLoginMsg() {
      return new Promise((resolve,reject)=> {
        this.$http.post('login',this.formdata)
        .then(res => {
          console.log('请求成功了res:',res)
          const {
            data,
            meta:{msg,status}
          } = res.data
          if(status == '200') {
            this.$message.success(msg)
            this.$router.push('/home')
            resolve(data)
          } else {
            this.$message.warning(msg)
            resolve(data)
          }
        })
        .catch(err => {
          console.log('请求失败了')
          reject(err)
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-warp {
  height: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 400px;
    background-color: #fff;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 5px 5px 5px rgba(0,0,0,.5);
  }
  .login-btn {
    width: 100%;
  }
}
</style>