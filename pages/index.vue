<script>
// Imports
import Navigation from '../components/Navigation'
import Jumbotron from '../components/Jumbotron'
import TrendingMovies from '../components/TrendingMovies'
import Movies from '../components/Movies'

// Import ConfigCat
import * as configcat from "configcat-js-ssr"; // New*

const configCatClient = configcat.createClient("JjfaCL3OkE-K7KlUIm5bjw/p9xZ6rbmiUiIOY-ylC4Gnw"); // *New

export default {
  name: 'IndexPage',
  components: {
    Navigation,
    Jumbotron,
    TrendingMovies,
    Movies
  },

  data() {
    return {
      canShowTrendingMovies: false,
    }
  },
  methods: {
    checkTrendingMovies() {
      configCatClient.getValueAsync("canshowtrendingmovies",  false)
      .then( value => {
        this.canShowTrendingMovies = value;
      });
    }
  }

}
</script>

<template>
  <main>
    <Navigation />
    <Jumbotron />
    <TrendingMovies />
    <Movies />
  </main>
</template>
