<template>
  <section class="container">
    <div>
      <h1 class="title">
        <app-logo/>
        Finn Ditt Treningsenter
      </h1>
      <h2 class="subtitle">
        Et nettside hvor du kan finne nærmeste treningssenter
      </h2>
      <div class="sok">
        <input type="search" class="searchForFitnessCenter" v-model="searchQuery" v-on:keyup="getGym" />
        {{$store.query}}
      </div>
      <div class="gyms">
        <gym
          v-for="gym in parsedGyms"
          v-bind:key="gym.id"
          :title="gym.name"
          :chain="gym.chain"
          :hours="gym.hours"
          :prices="gym.prices"
        ></gym>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import gym from '@/components/gym.vue'
import gymData from '@/assets/json/gyms.json'
import mapfunctions from '@/middleware/mapfunctions.js'

export default {
  components: {
    AppLogo,
    gym
  },
  methods: {
    getGym: function(q) {
      console.log(this.foundGyms);
      console.log(this.searchQuery);
      var allgyms = this.allGyms;
      var app = this;
      q = this.searchQuery;
      // Get location lat / long 
      // Parse by regexp name 
        // Parse by lat long
        mapfunctions.getLatLong(q).then(function(r) {
          let queryLatLong = r.data.results[0].geometry.location;
          var closestGym = mapfunctions.closestLatLong(queryLatLong,allgyms);
          app.parsedGyms = [closestGym];
        });
    }
  },
  data: function() {
    return {
      searchQuery: "Oslo",
      allGyms: gymData,
      parsedGyms: gymData,
    }
  },
}


</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

input.searchForFitnessCenter {
  width: 50%;
  padding: 10px;
  font-size: 24px;
}
</style>

