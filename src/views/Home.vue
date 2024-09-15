<script>
import { ref, getDownloadURL } from "firebase/storage";
import {storage} from '../firebase.js'; 
import IconBarraInferiorVue from '../components/icon/IconBarraInferior.vue';
import IconBarraSuperiorVue from '../components/icon/IconBarraSuperior.vue';
import TitlePortada from '../components/portada/TitlePortada.vue';
import PanelBoton from '../components/portada/PanelBoton.vue';

export default {
    name: 'Home',
    components: {
        IconBarraSuperiorVue,
        IconBarraInferiorVue,
        TitlePortada,
        PanelBoton,
        
    },
    data() {
        return {
            backgroundImageUrl: '',  // Inicialmente vacío
        };
    },
    mounted() {
        this.loadBackgroundImage();
    },
    methods: {
        async loadBackgroundImage() {
            try {
                // Cambia el path según la estructura en tu Firebase Storage
                const imageRef = ref(storage, 'invitacion_milo/Milo_45.jpg');
                const url = await getDownloadURL(imageRef);
                this.backgroundImageUrl = url;  // Asignamos la URL a la variable de datos
            } catch (error) {
                console.error("Error fetching background image:", error);
            }
        }
    }
}
</script>
<template>
    <div class="container_home container"  :style="{ backgroundImage: `url(${backgroundImageUrl})`}">
        <IconBarraSuperiorVue class="barra_sup" />
        <div class="overlay"></div>
        <div class="content_home">
            <TitlePortada />
            <div class="box_home">
                <PanelBoton/>
            </div>
            
        </div>
        <IconBarraInferiorVue class="barra_inf" />
    </div>
</template>
<style>
.container_home {
    /**background-image: url('../assets/img/Milo_45.jpg');**/
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
}

.overlay {
    background: rgba(0, 0, 0, 0.3);
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.content_home {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.barra_sup {
    position: absolute;
    top: -4%;
    left: 0;
    z-index: 100;
}

.barra_inf {
    position: fixed;
    bottom: -3%;
    left: 0;
    z-index: 1;
}
.box_home{
    width:100%;
    position:relative;
}
@media (min-width: 1025px) {
    .container_home{
        min-width:100vw;
        min-height:100%;
    }
    .overlay{
        min-width:100vw;
        min-height:100%;
    }
    .barra_sup {
        top:-15%;
    }
    .barra_inf{
        bottom:-26%;
    }
}
</style>