<script>
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";


export default {
  name: 'Carrousel',
  data() {
    return {
      imageUrls: [],
      

    };
  },
  mounted() {
    this.loadSpecificImages();
  },
  methods: {
    async loadSpecificImages() {
      const imageNames = [
        "Milo(60).jpg",
        "Milo(59).jpg",
        "Milo(40).jpg",
        "Milo(45).jpg",
        "Milo(35).jpg",
        "Milo(14).jpg"
      ];
      const imageFolder = "invitacion_milo";
      try {
        const urlPromises = imageNames.map((imageName) => {
          const imageRef = ref(storage, `${imageFolder}/${imageName}`);
          return getDownloadURL(imageRef);
        });
        this.imageUrls = await Promise.all(urlPromises); // Asignar URLs al array
      } catch (error) {
        console.error("Error al cargar las imágenes específicas:", error);
      }

    },
  },
}
</script>
<template>
  
  <div class="container_carrousel">
    <div id="carouselExampleFade" class="carousel slide carousel-fade carousel_photo" data-bs-ride="carousel" data-bs-interval="2500" >
    <div class="carousel-inner">
      <div
          class="carousel-item"
          v-for="(url, index) in imageUrls"
          :key="index"
          :class="{ active: index === 0 }"
        >
          <img :src="url" class="d-block w-100" alt="" />
        </div>
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