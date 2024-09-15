<script>
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

export default {
    name:'Galeria',
    data(){
        return{
            imageUrls: [],       
            selectedImage: null 
        }
    },
    mounted() {
    this.loadSpecificImages();
  },
    methods: {
        async loadSpecificImages() {
      const imageNames = [
        "Milo(3).jpg",
        "Milo(6).jpg",
        "Milo(7).jpg",
        "Milo(8).jpg",
        "Milo(9).jpg",
        "Milo(10).jpg",
        "Milo(12).jpg",
        "Milo(13).jpg",
        "Milo(15).jpg",
        "Milo(17).jpg",
        "Milo(16).jpg",
        "Milo(26).jpg",
        "Milo(29).jpg",
        "Milo(33).jpg",
        "Milo(28).jpg",
        "Milo(31).jpg",
        "Milo(32).jpg",
        "Milo(38).jpg",
        "Milo(42).jpg",
        "Milo(44).jpg",
        "Milo(47).jpg",
        "Milo(25).jpg",
        "Milo(46).jpg",
        "Milo(25).jpg"
      ];
      const imageFolder = "invitacion_milo";
      try {
        const urlPromises = imageNames.map((imageName) => {
          const imageRef = ref(storage, `${imageFolder}/${imageName}`);
          return getDownloadURL(imageRef);
        });
        this.imageUrls = await Promise.all(urlPromises); 
      } catch (error) {
        console.error("Error al cargar las imágenes específicas:", error);
      }

    },
        // Método para abrir el modal con la imagen seleccionada
        enlargeImage(imageUrl) {
            this.selectedImage = imageUrl;
            // Abre el modal de Bootstrap
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            modal.show();
        }
    }
}
</script>
<template>
    <div class="container">
    <!-- Título de la galería -->
    <div class="row justify-content-center">
      <div class="col-12">
        <h1 class="title_galeria">Galería de fotos</h1>
      </div>
    </div>

    <!-- Fila con las imágenes -->
    <div class="row">
      <div class="col-4 mb-4" v-for="(image, index) in imageUrls" :key="index">
        <img v-lazy="image" class="rounded img-thumbnail" alt="" @click="enlargeImage(image)" />
      </div>
    </div>

    <!-- Modal de Bootstrap para mostrar la imagen agrandada -->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Mostrar la imagen seleccionada en el modal -->
            <img :src="selectedImage" class="img-fluid" alt="Imagen agrandada" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.container{
    width:100%;
    min-height: 100vh;
}
.title_galeria{
    color:var(--color__font_title);
    font-family: TobiPro-heavy;
    font-size:4rem;
    text-align: center;
    line-height: 90%;
    margin: 1rem 0;
}
.galeria img{
    box-shadow: 0 8px 10px -4px rgba(0,0,0,.6);
    border-radius: 15px;
}
</style>