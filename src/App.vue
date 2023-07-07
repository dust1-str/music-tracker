<script setup>
import { ref } from 'vue';

let cancion = ref('');
let artist = ref('');
let album = ref('');
let backgroundImageUrl = ref('');
let mostrar = ref(false);

const api_key = 'aaf389a634e7bd8ed80372639d5f3c49';
let url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&user=pepepecas192&api_key=$API_KEY&format=json';

const getSong = () => {
  fetch(url.replace('$API_KEY', api_key))
    .then(res => res.json())
    .then(data => {
      console.log(data);
      mostrar.value = true;
      getArtist(data);
      cancion.value = (data.recenttracks.track[0].name);
    })
}

const getArtist = (value) => {
  let artista = value.recenttracks.track[0].artist;
  let info_artista = Object.values(artista);
  artist.value = info_artista[1];
  getAlbum(value);
}

const getAlbum = (value) => {
  let image = value.recenttracks.track[0].image[2]
  let images = Object.values(image);
  album.value = images[1];
  backgroundImageUrl.value = images[1];
};

setInterval(getSong, 3000)

</script>

<template>
  <div class="tarjeta">
    <div class="album">
      <Transition>
        <img v-show="album" :src="album" alt="foto de album">
      </Transition>
    </div>
    <Transition>
      <div :style="{ backgroundImage: `url('${backgroundImageUrl}')`,backgroundSize: '150%', backgroundPosition: 'center'} " v-show="mostrar" class="info">
      <Transition>
        <p v-show="cancion">{{ cancion }}</p>
      </Transition>
      <Transition>
        <p v-show="artist">{{ artist }}</p>
      </Transition>
    </div>
    </Transition>
  </div>
</template>

<style scoped>
.tarjeta {
  display: flex;
  align-items: center;
  height: 120px;
  width: 100%;
  padding: 10px;
}

.album {
  height: 100%;
  width: min-content;
  border-radius: 10px;
  box-shadow: 8px 6px 10px rgb(43, 43, 43);
  z-index: 1;
}

.info {
  background-color: rgb(19, 18, 18);
  height: 80%;
  min-width: fit-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0px 10px 10px 0;
  box-shadow: 5px 5px 10px rgb(43, 43, 43);
}

img {
  height: inherit;
  border-radius: 10px;
}

p {
  font-size: 20px;
  font-weight: 900;
  color: white;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>