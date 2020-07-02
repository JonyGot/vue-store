<template>
  <transition name="slide">
    <div class="modal" v-show="showMedal">
      <div class="mask"></div>\
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <a href="javascroipt:;" class="btn" v-if="btnType == 1" @click="$emit('submit')">{{sureText}}</a>
            <!-- <a href="javascroipt:;" class="btn" v-if="btnType == 1" @click="$emit('cancel')">确定</a> -->
          <div :class="modelType" v-else>
            <a href="javascroipt:;" class="btn"  @click="$emit('submit')">{{sureText}}</a>
            <a href="javascroipt:;" class="btn"  @click="$emit('cancel')">{{canceText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    // 弹窗大小:small middle large
    modalType: {
      type: String,
      dafault: "from"
    },
    // 弹窗标题
    title: String,
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancalText: {
      type: String,
      default: "取消"
    },
    showMedal: Boolean
  },
  methods: {}
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 40%;
  width: 100%;
  z-index: 10;
  transition: all .8s;
  .mask {
    position: fixed;
    width: 100%;
    top: 0%;
    left: 0;
    background-color: #fff;
    opacity: 0.5;
  }
 
  &.slide-enter-active{
      top: 40%;
  }
 &.slide-enter{
      top: -100%;
  }
  &.slide-leave-active{
      top: -100%;
  }
  .modal-dialog {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 660px;
    height: auto;
    background-color: #fff;
    opacity: .98;
    transform: translate(-50%, -50%);
    .modal-header {
      height: 60px;
      background-color: #fff;
      opacity: .98;
      padding: 0 25px;
      line-height: 60px;
      font-size: 16px;
      .icon-close {
        position: absolute;
        top: 23px;
        right: 25px;
        width: 16px;
        height: 16px;
        background: url("/imgs/icon-close.png") no-repeat center;
        background-size: contain;
        transition: all 0.6;
        &:hover {
          transform: scale(1.5);
        }
      }
    }
    .modal-body {
      padding: 42px 40px 54px;
    }
    .modal-footer {
      height: 82px;
      width: 100%;
      line-height: 82px;
      text-align: center;
    }
  }
}
</style>