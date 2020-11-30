<template>
  <div class="card">
    <div>Time: {{ parseInt(currentDateTime.slice(11, -4))+timezone}}:{{currentDateTime.slice(14, -1)}}</div>
    <div>UTC: {{timezone}}</div>
    <!--<div>{{myDate.getHours()+timezone}}:{{myDate.getMinutes()}}</div>-->
  </div>
</template>

<script>
export default {
  name: "Time",
  data(){
    return{
      myDate: new Date(this.currentDateTime),
      minutes: null,
      hours: null
    }
  },
  props: {
    currentDateTime: null,
    timezone: null
  },
  methods: {

  },
}
</script>

<style scoped>
.card{
  font-size: 23px;
  border-radius: 15px;
  background: rgba(221, 108, 108, 1);
  color: #ffffff;
  //color: #165ba2;
  font-weight: bold;
  //width: 350px;
  margin: 35px;
  padding: 15px;
  display: inline-block;
  transition: .3s;
}
:hover.card {
  transform: scale(1.1, 1.1);
}
</style>
