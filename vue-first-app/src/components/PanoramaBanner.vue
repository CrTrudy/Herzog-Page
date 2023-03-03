<template>
        <div class="panorama-slider">
            <img class="panorama-img" :src="panoramaImage" alt="Panorama Wandgemaelde">
        </div>
</template>

<script>
  export default {
      data() {
      return {
          panoramaImage: require('../imgs/WandbildWEB.webp'),
      };
      },
      computed:
        {
          
        }
  };
</script>


<style scoped>

.panorama-slider {
  display: grid;
  height: 28rem;
  overflow: hidden;
  overflow-x: scroll;
}

.panorama-img {
  height: 100%;
  overflow-x: scroll;
}


@media screen and (min-width: 768px) {

  .panorama-slider {
    height: 40rem;
  }
}

@media screen and (min-width: 1024px) {

.panorama-slider {
  height: 55rem;
}
}

</style>
