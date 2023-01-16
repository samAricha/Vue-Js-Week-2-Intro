<script setup>
import {ref, computed} from "vue";

const header = ref("Cool Kids Tip Calculator")
const amount = ref("")
const tipPercent = ref("")
let tipAmnt = ref(0)

const tipAmount = computed(()=> {
  return amount.value*tipPercent.value/100
} )

function calculatedTip(){
  tipAmnt.value = amount.value*tipPercent.value/100
  alert(`Tip amount is: ${tipAmnt.value}`);
}
</script>

<template>
  <div>
    <h1>{{header}}</h1>
    <div style="flex: auto">
      <label for="">amount: </label><br>
      <input type="number" v-model.number="amount">
    </div>

    <div>
      <label for="">tip percent(%): </label><br>
      <input type="number" v-model.number="tipPercent">
    </div>
    
    <br>
    <div v-if="tipAmount">
      <p>Tip Amount: <b style="color: #ef5753; font-size: large; font-weight: bold ">{{tipAmount}}</b></p>
    </div>
    <br>
    <button @click="calculatedTip"
            class="btn btn-primary">
      Calculate
    </button>

  </div>

</template>

<style scoped>
body {
  background: #eff8ff;
  height: 100vh;
  width: 100vw;
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}
h1 {
  color: #3d4852;
}
.btn {
  border: none;
  border-radius: 3px;
  margin: auto 0;
  padding: 0.5rem 0.75rem;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.1s ease-in;
}
.btn-primary {
  background: #6cb2eb;
  color: #fff;
}
input {
  width: 70%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
}


</style>