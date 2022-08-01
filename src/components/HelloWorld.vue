<template>
  <div class="hello">
    <div>
    Vue3 仿美团项目<br />
    <van-button type="primary" @click="save">主要按钮</van-button>
    <van-button type="success" @click="change">成功按钮</van-button>
    <van-icon name="chat-o" color="#ee0a24" />
    <van-icon name="arrow" />
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-bingkuai"></use>
    </svg>
    </div>
    <transition name="van-slide-left">
      <div v-show="visible">Fade</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      visible: false,
    }
  },
  created () {
    
  },
  methods: {
    save(){
      // this.$toast.loading({
      //   message: '加载中...',
      //   forbidClick: true,
      //   loadingType: 'spinner'
      // })
      this.$toast.success('成功文案');
    },
    change(){
      this.visible = !this.visible
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  font-size: 20px;
  div{
    color: red;
  }
}
</style>
