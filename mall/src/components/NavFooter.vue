<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">Jony的博客</a>
      <a href="javascript:;">Jony的github</a>
      <a href="javascript:;">Jony的微博</a>
      <a href="javascript:;">Jony的QQ</a>
    </div>
    <div class="copyRight">Copyright ©2019 <span>mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  // padding: 20px;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
    
  }
  .footer-link{
    a {
      color: #999;
      display: inline-block;
      margin-left: 10px;
      font-size: 16px;
      &:after {
        content: "|";
        margin-left: 10px;
      }
    }
    
  }
  .copyRight span{
      color: #ff6600;
    }
}
</style>