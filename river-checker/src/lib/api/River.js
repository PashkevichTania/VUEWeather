import axios from 'axios'
export default class Reg {
  constructor () {
    this._http = axios
    this._apiUrl = 'https://api.openweathermap.org'
  }
  getData (city) {
    let route = `${this._apiUrl}/data/2.5/weather`
    return this._http.get(`${route}`, {
      params: {
        q: `${city}`,
        APPID: '2e950503041f2a9afc857be96e6e7ed9'
      }
    })
  }
}

// 5102339 - city id
// 2e950503041f2a9afc857be96e6e7ed9 - api ID
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
