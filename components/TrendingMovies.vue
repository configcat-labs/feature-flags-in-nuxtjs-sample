<script>
export default {
  name: 'TrendingMovies',
  data () {
    return {
      trendingMovies: [
        {
          name: 'Doctor Strange in the Multiverse of Madness',
          rating: '7.40',
          genre: [
            'Adventure', 'Action', 'Fantasy'
          ],
          poster: 'https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80'

        },
        {
          name: 'The Batman',
          rating: '8.00',
          genre: [
            'Drama', 'Action', 'Crime'
          ],
          poster: 'https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80'
        },
        {
          name: 'Spider-Man: No Way Home',
          rating: '8.00',
          genre: [
            'Sci-Fi', 'Adventure', 'Action'
          ],
          poster: 'https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80'
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <div class="p-4">
      <p class="mb-3 lead">
        Trending this week!
      </p>
      <b-row>
        <b-container class="d-flex justify-content-center">
          <b-card
            v-for="trendingMovie in trendingMovies"
            :key="trendingMovie.name"
            :img-src="trendingMovie.poster"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 ml-2"
          >
            <b-card-text>
              <strong>{{ trendingMovie.name }}</strong> | <small class="text-success">&#9733; {{ trendingMovie.rating }}</small>
            </b-card-text>
            <div>
              <b-badge v-for="genre in trendingMovie.genre" :key="genre" class="mr-1" variant="info">
                {{ genre }}
              </b-badge>
            </div>
            <template #footer>
              <b-button size="sm" href="#" variant="dark">
                &#9658; Watch Now
              </b-button>
            </template>
          </b-card>
        </b-container>
      </b-row>
    </div>
  </div>
</template>
