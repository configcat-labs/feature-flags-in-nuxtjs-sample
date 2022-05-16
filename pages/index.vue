<script>
// Imports
import Navigation from '../components/Navigation'
import Jumbotron from '../components/Jumbotron'
import TrendingMovies from '../components/TrendingMovies'
import Movies from '../components/Movies'

export default {
  name: 'IndexPage',
  components: {
    Navigation,
    Jumbotron,
    TrendingMovies,
    Movies
  }

}
</script>

<template>
  <main>
    <Navigation />
    <Jumbotron />
    <!-- Feature flag can toggle this -->
    <TrendingMovies />
    <Movies />
  </main>
</template>
