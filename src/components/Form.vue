<template>
  <div class="container">
    <div>
      <p>复选框</p>
      <input id="check" type="checkbox" v-model="isAgree">
      <label for="check">{{ isAgree }}</label>
    </div>

    <hr>
    <div>
      <p>多个复选框一组</p>
      <input type="checkbox" id="name1" value="名称1" v-model="checkNames">
      <label for="name1">名称1</label>
      <input type="checkbox" id="name2" value="名称2" v-model="checkNames">
      <label for="name2">名称2</label>
      <input type="checkbox" id="name3" value="名称3" v-model="checkNames">
      <label for="name1">名称3</label><br>
      <span>Checked names: {{ checkNames }}</span>
    </div>

    <hr>
    <div>
      <p>单选按钮</p>
      <input id="one" value="ONE" type="radio" v-model="picked">
      <label for="one">One</label>
      <input type="radio" id="tow" value="TWO" v-model="picked">
      <label for="tow">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>

    <hr>
    <div>
      <p>选择框</p>
      <select v-model="selected">
        <option value="" disabled>请选择</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <span> Selected: {{ selected }}</span>
      <br>

      <p>选择框-多选</p>
      <select name="mulSelect" id="mulSelect" multiple v-model="mulSelected">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
      <br>
      <span>mulSelected: {{ mulSelected }}</span>
    </div>

    <hr>
    <div>
      <input type="number" v-model.number="age">
      <span>Age:{{ age }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Form',
  data(){
    return {
      isAgree:true,
      checkNames:[],
      picked:'',
      selected:'',
      mulSelected:[],
      age:''
    }
  }
}
</script>

<style scoped>
  .container{
    text-align: left;
  }
</style>
