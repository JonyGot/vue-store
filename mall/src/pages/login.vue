<template>
  <div class="login">
    <div class="container">
      <a href="/">
        <img src="/imgs/login-logo.png" alt />
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <div class="form-header">
            <h3>
              <a href="JavaScript:;" class="checked">帐号登录</a>
              <a>｜</a>
              <a href="JavaScript:;">扫码登录</a>
            </h3>
          </div>
          <div class="form">
            <form action>
              <input type="text" placeholder="账号" v-model="username"/>
              <input type="password" placeholder="请输入密码"  v-model="password"/>
            </form>
            <a href="javascript:;" class="btn btn-large" @click="login">登录</a>
          </div>
          <div class="form-footer">
            <div class="msg">
              <a href="javascript:;" @click="register">手机短信登录/注册</a>
            </div>
            <div class="reg">
              <a href>立即登录</a>
              <span>｜</span>
              <a href>忘记密码？</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="footer-link">
        <a href="javascript:;">Jony的博客</a>
        <a href="javascript:;">Jony的github</a>
        <a href="javascript:;">Jony的微博</a>
        <a href="javascript:;">Jony的QQ</a>
      </div>
      <div class="copyRight">
        Copyright ©2019
        <span>mi.futurefe.com</span> All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      password:'',
      suerId:'',
      res:{},
    }
  },
  methods: {
    login(){
      let {username,password} = this;
      this.axios.post('/user/login',{
        username,
        password
      }).then((res)=>{
        this.$cookie.set('userId',res.id,{expires:'1M'});
        // 保存用户信息
        this.$store.dispatch('saveUserName',res.username);
        this.$router.push('/index');
      })
    },
    register(){
      let {username,password} = this;
      if(!username){
        // alert('请直接在登录框内输入信息，然后点击该按钮即可注册')
        this.$message.info('请直接在登录框内输入信息，然后点击该按钮即可注册')
        return 0;
      }
      this.axios.post('/user/register',{
        username,
        password
      }).then(()=>{
      })
    }
  },
};
</script>

<style lang="scss">
.login {
  .wrapper {
    background: url(/imgs/login-bg.jpg) no-repeat 50%;
    .container {
      height: 576px;
    }
    .login-form {
      box-sizing: border-box;
      padding: 0px 31px;
      width: 410px;
      height: 510px;
      background-color: #fff;
      bottom: 29px;
      right: 0;
      position: absolute;
      .form-header {
        height: 23px;
        width: 100%;
        h3 {
          text-align: center;
          margin: 40px auto 49px;
          font-size: 24px;
          a {
            margin: 40px 10px 49px;
            color: #333;
            font-weight: bolder;
          }
          .checked {
            color: #f60;
          }
        }
      }
      .form {
        width: 100%;
        margin-top: 49px;
        text-align: center;
        input {
          box-sizing: border-box;
          margin-bottom: 20px;
          width: 100%;
          height: 50px;
          padding: 18px;
          border: 1px solid #e5e5e5;
        }
        .btn {
          width: 100%;
        }
      }
      .form-footer {
        width: 100%;
        display: flex;
        margin-top: 14px;
        a {
          color: #999;
          font-size: 14px;
        }
        .msg {
          width: 50%;
          text-align: left;
          a {
            color: #f60;
          }
        }
        .reg {
          width: 49.9%;
          text-align: right;
        }
      }
    }
  }
  .login-footer {
    width: 100%;
    height: 234px;
    color: #999;
    font-size: 16px;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    // padding: 20px;
    .footer-link {
      margin-top: 50px;
      a {
        color: #999;
        display: inline-block;
        margin-left: 10px;
        font-size: 16px;
        &:after {
          content: "|";
          margin-left: 10px;
        }
        &:last-child:after{
            display: none;
        }
      }
      
    }
    .copyRight {
        margin-top: 20px;
      }
  }
}
</style>