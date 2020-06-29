<template>
  <div class="service">
    <div class="continer">
      <ul>
        <li>
          <span class="icon-setting"></span>预约维修服务
        </li>
        <li>
          <span class="icon-7day"></span>预约维修服务
        </li>
        <li>
          <span class="icon-15day"></span>预约维修服务
        </li>
        <li>
          <span class="icon-post"></span>预约维修服务
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "service"
};
</script>

<style lang = 'scss'>
.service {
  padding: 33px 0;
  color: #666;
  font-size: 16px;
  li {
    display: inline-block;
    width: 24.9%;
    text-align: center;
    border-right: 1px solid #e5e5e5;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 8px;
      
    }
    .icon-setting {
      background: url("/imgs/icon-setting.png") no-repeat center;
      background-size: contain;
    }
    .icon-7day {
      background: url("/imgs/icon-7day.png") no-repeat center;
      background-size: contain;
    }
    .icon-15day {
      background: url("/imgs/icon-15day.png") no-repeat center;
      background-size: contain;
    }
    .icon-post {
      background: url("/imgs/icon-post.png") no-repeat center;
      background-size: contain;
    }
  }
}
</style>