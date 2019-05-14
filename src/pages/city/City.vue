<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :hot="hotCities"
      :cities="cities"
      :letter="letter"
    >
    </city-list>
    <city-alphabet
      :cities="cities"
      @letterChange="sendLetterToList"
    >
    </city-alphabet>
  </div>
</template>

<script>
import Axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      Axios.get('/api/city.json')
        .then(this.HandleGetCityInfoSuss)
    },
    HandleGetCityInfoSuss (res) {
      if (res.data.ret) {
        let data = res.data.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    sendLetterToList (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
.city
  height 100%
  // background #f5f5f5
</style>
