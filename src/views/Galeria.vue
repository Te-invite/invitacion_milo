<script>
import foto01 from '../assets/img/galeria/Milo(3).jpg';
import foto02 from '../assets/img/galeria/Milo(6).jpg';
import foto03 from '../assets/img/galeria/Milo(7).jpg';
import foto04 from '../assets/img/galeria/Milo(8).jpg';
import foto05 from '../assets/img/galeria/Milo(9).jpg';
import foto06 from '../assets/img/galeria/Milo(10).jpg';
import foto07 from '../assets/img/galeria/Milo(12).jpg';
import foto08 from '../assets/img/galeria/Milo(13).jpg';
import foto09 from '../assets/img/galeria/Milo(15).jpg';
import foto010 from '../assets/img/galeria/Milo(17).jpg';
import foto011 from '../assets/img/galeria/Milo(16).jpg';
import foto012 from '../assets/img/galeria/Milo(26).jpg';
import foto013 from '../assets/img/galeria/Milo(29).jpg';
import foto014 from '../assets/img/galeria/Milo(33).jpg';
import foto015 from '../assets/img/galeria/Milo(28).jpg';
import foto016 from '../assets/img/galeria/Milo(31).jpg';
import foto017 from '../assets/img/galeria/Milo(32).jpg';
import foto018 from '../assets/img/galeria/Milo(38).jpg';
import foto019 from '../assets/img/galeria/Milo(42).jpg';
import foto020 from '../assets/img/galeria/Milo(44).jpg';
import foto021 from '../assets/img/galeria/Milo(47).jpg';
import foto022 from '../assets/img/galeria/Milo(25).jpg';
import foto023 from '../assets/img/galeria/Milo(46).jpg';
import foto024 from '../assets/img/galeria/Milo(25).jpg';
export default {
    name:'Galeria',
    data(){
        return{
            images:[
                {img:foto01},
                {img:foto02},
                {img:foto03 },
                {img:foto04},
                {img:foto05 },
                {img:foto06 },
                {img:foto07 },
                {img:foto08 },
                {img:foto09 },
                {img:foto010 },
                {img:foto011 },
                {img:foto012 },
                {img:foto013 },
                {img:foto014 },
                {img:foto015 },
                {img:foto016 },
                {img:foto017 },
                {img:foto018 },
                {img:foto019 },
                {img:foto020 },
                {img:foto021 },
                {img:foto022 },
                {img:foto023 },
                {img:foto024 }

        ],
        selectedImage: null 
        }
    },
    methods: {
        // Método para abrir el modal con la imagen seleccionada
        enlargeImage(image) {
            this.selectedImage = image;
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

        <!-- Se genera una fila por cada imagen -->
        <div class="row">
            <div class="col-4 mb-4" v-for="(image, index) in images" :key="index" >
                <img  :src="image.img" class="rounded img-thumbnail" alt="" @click="enlargeImage(image.img)">
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
                        <img :src="selectedImage" class="img-fluid" alt="Imagen agrandada">
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