<script>
import foto1 from '../assets/img/portada/Milo(60).jpg';
import foto2 from '../assets/img/portada/Milo(59).jpg';
import foto3 from '../assets/img/portada/Milo(40).jpg';
import foto4 from '../assets/img/portada/Milo(45).jpg';
import foto5 from '../assets/img/portada/Milo(35).jpg';
import foto6 from '../assets/img/portada/Milo(14).jpg';
import foto7 from '../assets/img/portada/Milo(4).jpg';


export default {
  name: 'Carrousel',
  data() {
    return {
      foto1,
      foto2,
      foto3,
      foto4,
      foto5,
      foto6,
      foto7

    }
  }
}
</script>
<template>
  
  <div class="container_carrousel">
    <div id="carouselExampleFade" class="carousel slide carousel-fade carousel_photo" data-bs-ride="carousel" data-bs-interval="2500" >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="foto1" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto2" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto3" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto4" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto5" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto6" class="d-block w-100" alt="...">
      </div>
      <!-- <div class="carousel-item">
        <img :src="foto7" class="d-block w-100" alt="...">
      </div> -->
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  </div>
</template>
<style>
.container_carrousel{
  width:100%;
  height:100%;
}
.carousel_photo{
  min-width: 100vw;
}

</style>