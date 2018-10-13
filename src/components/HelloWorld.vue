<template>
  <div>
    姓名：<input type="text" v-model="name"/><br/><br/>
    年龄：<input type="text" v-model="age"/><br/><br/>
    <button @click="add">保存</button>
    <br/><br/>
    <table border="1" cellpadding="5" cellspacing="0" width="500" align="center">
      <tr>
        <th>#</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>操作</th>
      </tr>

      <tr v-for="(result,index) in data" :key="index" :class="(index % 2) == 0 ? 'odd' : '' ">
        <td>{{index + 1}}</td>
        <td>{{result.name}}</td>
        <td>{{result.age}}</td>
        <td width="100">
          <button @click="edit(index)">编辑</button>
          <button @click="del(index)">删除</button>
        </td>
      </tr>

    </table>
  </div>
</template>

<script>
  export  default {
    data(){
      return {
        name: undefined,age:undefined,
        index: -1,
        data:[
          {name: 'zs', age: 22},
          {name: 'ls', age: 23},
          {name: 'zl', age: 20}
        ]
      }
    },
    methods: {
      edit(index){
        this.index = index;
        var record = this.data[index];
        this.name = record.name;
        this.age = record.age;
      },
      del(index){
        // 索引位置， 要删除元素个数，
        this.data.splice(index, 1);
      },
      add(){
        // 索引位置， 要删除元素个数， 添加元素
        //添加
        if(this.index < 0) {
          this.data.splice(0, 0 , {name: this.name, age: this.age});
        }else{
          this.data[this.index] = {name: this.name, age: this.age};
        }
        this.age = '';
        this.name = '';
        this.index = -1;
      }
    }
  }

</script>

<style>
  .odd {
    background-color: #ccc;
  }
</style>
