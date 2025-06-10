<template>
  <div class="app">
    <Navigation/>
    <Jumbotron/>
    <TrendingMovies v-if="isTrendingMoviesEnabled"/>
    <Movies/>
  </div>
</template>

<script setup lang="ts">

import * as configcat from 'configcat-js-ssr';
import type {IConfigCatClient} from "configcat-js-ssr";

const config = useRuntimeConfig();

const configCatClient = ref<IConfigCatClient>(null);
const isTrendingMoviesEnabled = ref<boolean>(false);

const getFeatureFlagValue = async (featureFlagKey: string, configCatSDKKey: string): Promise<boolean> => {
  if (!configCatClient.value) {
    configCatClient.value = configcat.getClient(configCatSDKKey);
  }

  return await configCatClient.value.getValueAsync(featureFlagKey, false);
}

const {data} = await useAsyncData('users', () => getFeatureFlagValue('trendingMovies', config.configCatSdkKey));

isTrendingMoviesEnabled.value = data.value;

</script>
