<template>
    <!-- 计算属性、侦听器 -->
    <div class="container">
        <!-- 计算属性 computed -->
        <div>
            <p>计算属性 computed </p>
            <blockquote>
                <b>场景：对于任何复杂逻辑，你都应当使用计算属性。</b><br>
                <b>计算属性是基于它们的依赖进行缓存的。</b>只在相关依赖发生改变时它们才会重新求值。
                这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。<br>
                <b>注意：计算属性也可通过方法（methods）实现，区别：计算属性基于缓存，方法每次都会被调用</b>
            </blockquote>
            firstName: <input type="text" v-model="firstName" placeholder="请输入firstName"><br>
            lastName: <input type="text" v-model="lastName" placeholder="请输入lastName"><br>
            fullName（修改会出发setter方法）<input type="text" v-model="fullName"><br>
            <p>输出：<br>
                <span>firstName : {{ firstName }}</span><br>
                <span>lastName : {{ lastName }}</span><br>
                <span>fullName : {{ fullName }}</span><br>
            </p>
            <!-- <span>反转后字符串 （使用默认getter方法）: {{ reverseMessage }}</span><br>
            <span>反转后字符串（重写getter|setter方法） : {{ reverseMessageWithGetAndSet }}</span> -->
        </div>

        <!--  侦听器 watch  -->
        <div>
            <p>侦听器 watch </p>
            <blockquote>
                <b>场景：当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。</b>
                <p>
                    Question(控制台打印):
                    <input v-model="question">
                </p>
            </blockquote>
        </div>
    </div>
</template>

<script>
export default {
    name: "ComputeAndWatch",
    data () {
        return {
            firstName: 'Li', // 计算属性 computed
            lastName: 'PengFei',// 计算属性 computed
            question: 'Are you crazy ?' // 侦听器 watch
        }
    },
    // 计算属性
    computed: {
        // 计算属性默认只有getter方法（写法1）
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }

        // 计算属性默认只有getter方法（写法2）
        // fullName: {
        //     get () {
        //         return this.firstName + ' ' + this.lastName
        //     }
        // }

        // 写法3
        // fullName () {
        //     return this.firstName + ' ' + this.lastName
        // }

        // 按需提供setter方法（写法4）
        // fullName: {
        //     // getter方法
        //     get: function () {
        //         console.log('invoke computed getter method ... ')
        //         return this.firstName + ' ' + this.lastName
        //     },
        //     // setter方法（按需使用）
        //     set: function (newValue) {
        //         console.log('invoke computed setter method ... ', "\nnewValue", newValue)
        //     }
        // }

    },
    // 侦听器watch
    watch: {
        // 侦听属性 question
        question: function (newValue, oldValue) {
            console.log('question newValue', newValue, '\nquestion oldValue', oldValue)
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
