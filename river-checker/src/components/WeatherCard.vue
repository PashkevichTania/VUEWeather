<template>
  <div class="card">
    <div>Temperature: {{ (temp -273.15).toFixed(1)}} &#8451;</div>
    <div>{{main}}
      <img :src="`http://openweathermap.org/img/wn/${icon}@2x.png`" alt="icon" width="75px">
    </div>
    <div id="demo">
      <b-button @click="info"  pill variant="outline-primary" size="sm">
        <div v-if="show">
          Hide additional info
        </div>
        <div v-else>
          Show additional info
        </div>
      </b-button>
      <transition name="fade">
        <p v-if="show">{{description}}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data(){
    return{
      show: false
      /*pictURL: require(`../assets/img/${this.icon}.png`)*//*local img storage*/
    }
  },
  props: {
    name: null,
    country: null,
    id: null,
    temp: null,
    main: null,
    description: null,
    icon: null
  },
  methods: {
    info: function () {
      this.show = !this.show;
    }
  }
}
</script>

<style scoped>
.card{
  font-size: 25px;
  border-radius: 15px;
  background: rgba(250, 250, 250, 0.5);
  color: #289b85;
  font-weight: bold;
  width: 350px;
  margin: 20px;
  padding: 25px;
  display: inline-block;
  transition: .3s;
}
:hover.card {
  transform: scale(1.1, 1.1);
}
.header{
  vertical-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
img{
  vertical-align: middle;
  margin: 5px;
}
p{
  font-size: 20px;
  margin: 15px;
}
</style>
