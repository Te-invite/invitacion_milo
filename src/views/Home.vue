<script>
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
        
    }
}
</script>
<template>
    <div class="container_home container">
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
    background-image: url('../assets/img/Milo_45.jpg');
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

</style>