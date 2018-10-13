<!--

 常用指令，v-text，v-html，v-if、v-else-if、v-else，v-show,v-model,v-bind,v-for,v-bind,v-on
 参考 ： https://cn.vuejs.org/v2/guide/instance.html
-->

<template>
  <div class="container">
    <!--  v-text指令使用（相当于innerText)） -->
    <div v-text="vtext"></div>
    <br>
    <!-- v-html指令使用（相当于innerHTML） -->
    <div v-html="vhtml"></div>
    <br>

    <!-- v-if (移除或者添加元素，每次都会重新渲染) -->
    <div v-if="isActive">v-if 单独使用 (移除或者添加元素，每次都会重新渲染，不适用于频繁显示/隐藏场景，性能开销大)</div>
    <br>

    <!-- v-if、v-else-if、v-else(条件判断) -->
    <div v-if="page === 1">v-if、v-else-if、v-else 联合使用，第一页</div>
    <div v-else-if="page === 2">v-if、v-else-if、v-else 联合使用，第二页</div>
    <div v-else>v-if、v-else-if、v-else 联合使用，默认显示</div>
    <br>

    <!-- v-show （显示或者隐藏元素，仅渲染一次，适用于频繁显示/隐藏场景）-->
    <div v-show="isShow">v-show 使用 （显示或者隐藏元素，仅渲染一次，适用于频繁显示/隐藏场景）</div>
    <br>

    <!--  v-model (数据双向绑定) -->
    <div>
      <input type="text" v-model="userName" placeholder="请输入用户名"> 输入的内容（v-model 数据双向绑定）：{{ userName }}
    </div>
    <br>

    <!--  v-bind (数据单项绑定,v-bind:value可简写 :value,省去v-bind部分)
      等价于 <input type="text" :value="vbindValue">
    -->
    <div>
      <input type="text" v-bind:value="vbindValue"> 输入的内容（v-bind 数据单项绑定）：{{ vbindValue }}
    </div>
    <br>

    <!-- v-for (循环) -->
    <span>v-for 遍历数组</span>
    <ul>
      <!-- 包含索引 -->
      <!--<li v-for="(item,index) in list">当前索引：{{ index }} , {{ item }}</li>-->
      <!-- 使用 in 或者 of 进行遍历均可-->
      <!--<li v-for="item of list">{{ item }}</li>-->
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ul>
    <span>v-for 遍历对象</span>
    <ul>
      <!-- key-value，index 形式遍历 -->
      <li v-for="(value,key, index) in vforObject" :key="value.id"> {{ index }} , {{ key }} : {{ value }} </li>
      <!-- 仅遍历 value-->
      <!--<li v-for="value in vforObject"> {{ value }}</li>-->
    </ul>
    <br>

    <!-- v-on(事件绑定,v-on可简写 @click="", 省略v-on) -->
    （v-on 简写 @ ）事件绑定 ：
    <button v-on:click="onClick">点击事件</button>
    <!-- <button @click="onClick">点击事件</button> -->

  </div>
</template>


<script>
export default {
  name: "command",
  data () {
    return {
      vtext: 'v-text使用（相当于innerText)）',// v-text指令使用
      vhtml: `<span style="color: red;">v-html使用（相当于innerHTML）</span>`,// v-html指令使用
      isActive: true,// v-if 单独使用
      page: 1, // v-if、v-else-if、v-else 联合使用
      isShow: true, // v-show 使用
      userName: undefined, // v-model (数据双向绑定)
      vbindValue: undefined, // v-bind (数据单项绑定,v-bind:value可简写 :value,省去v-bind部分)
      list: [{ id: 1, name: 'Jone', age: 23 }, { id: 2, name: 'Catses', age: 29 }, { id: 3, name: 'Bodys', age: 43 }], // v-for使用，遍历数组
      vforObject: { id: 1, name: 'Thinkbam', age: 22 }  // v-for使用，遍历对象
    }
  },
  methods: {
    /**
     * v-on 事件绑定
     * @param event
     */
    onClick: function (event) {
      alert('触发了点击事件 ... ')
    }
  }
}
</script>

<style scoped>
.container {
  text-align: left;
  padding: 50px;
}
</style>
