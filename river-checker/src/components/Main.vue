<template>
  <b-container fluid="md">
    <b-row align-h="center">
      <div class="header">City: {{weather.name}}  <img :src="`https://www.countryflags.io/${weather.country}/flat/32.png`" alt="icon"></div>
    </b-row>
    <Weather
            :name="weather.name"
            :country="weather.country"
            :main="weather.main"
            :temp="weather.temp"
            :description="weather.description"
            :icon="weather.icon"
    >
    </Weather>
    <b-container fluid="md" class="EnterCityButton">
      <b-row align-h="center">
        <b-col lg="150">
          <b-input-group prepend="City" class="mt-3" size="md">
            <b-form-input v-model="city"></b-form-input>
            <b-input-group-append>
              <b-button variant="info" @click="getData">Enter</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>
    <Time
          :currentDateTime="currentDateTime"
          :timezone="weather.timezone"
    >
    </Time>
  </b-container>
</template>

<script>
import Reg from '../lib/api/River'
import Weather from './WeatherCard'
import Time from "./Time"
import axios from 'axios'
export default {
  name: 'Main',
  components: {
    Weather,
    Time
  },
  data() {
    return {
      regApi: new Reg(),
      city: null,
      currentDateTime: null,
      time: null,
      date: null,
      weather: {
        name: null,
        country: null,
        id: null,
        temp: null,
        main: null,
        description: null,
        icon: null,
        timezone: null
      }
    }
  },
  methods: {
    getData: function () {
      this.regApi.getData(this.city).then(data => {
        console.log(data)
        this.weather.name = data.data.name
        this.weather.country = data.data.sys.country
        this.weather.temp = data.data.main.temp
        this.weather.id = data.data.weather[0].id
        this.weather.main = data.data.weather[0].main
        this.weather.description = data.data.weather[0].description
        this.weather.icon = data.data.weather[0].icon
        this.weather.timezone = data.data.timezone/3600
        localStorage.city = this.city;
        // this.WeatherMass = data.data
      })
    },
  },
  created() {
    this.city = "Minsk"
    this.getData(this.city)
  },
  mounted() {
    axios
      .get('http://worldclockapi.com/api/json/utc/now')
      .then(response => (this.currentDateTime = response.data.currentDateTime))
      .catch(error => console.log(error));
  },
}

</script>

<style scoped>

h1{
  color: #000000;
}
h3{
  color: coral;
}
span{
  color: #154088;
  font-weight: bold;
  border-bottom: 1px dashed;
}
a:link {
  color: #497DDD;
  font-weight: bold;
  border-bottom: 1px dashed;
}
a:visited {
  color: #2656e5;
}
a:hover {
  color: #154088;
  border-bottom: .07em solid;
}
a:active {
  color: #2656e5;
  border-bottom: 1px dashed;
}
.header{
  font-size: xx-large;
  color: #c11a61;
}
</style>
