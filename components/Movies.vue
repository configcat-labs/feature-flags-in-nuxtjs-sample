<template>
  <div class="section movies">
    <h2 class="title">
      Movies
    </h2>

      <div class="movie-cards">
        <div v-for="movie in data.movies" :key="movie.name" class="movie-card border rounded">
          <div class="movie-card-header">
            <img width="100%" :src="movie.poster" alt=""/>
          </div>
          <div class="card-body p-2">
            <h4 class="movie-title">
              {{ movie.name }}
            </h4>
            <p class="movie-rating">4.5</p>
            <div class="movie-tags">
              <span v-for="tag in movie.tags" class="tag">{{ tag }}</span>
            </div>
          </div>
          <div class="card-footer p-2 mt-4">
            <button class="btn btn-primary">
              Watch Now
            </button>
          </div>
        </div>
      </div>

  </div>
</template>

<script setup lang="ts">

import type TMovie from "../types/TMovie.js";

const {data} = await useFetch<TMovie[]>('/api/movies');

</script>