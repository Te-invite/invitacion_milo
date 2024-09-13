<script>
import CarrouselVue from '../components/Carrousel.vue';
import IconBarraSuperiorVue from '../components/icon/IconBarraSuperior.vue';
import SectionTitle from '../components/SectionTitle.vue';
import Timer from '../components/Timer/Timer.vue';
import CronogramaFriends from '../components/CronogramaFriends.vue';
import ImageSlider from '../components/ImageSlider.vue';
import SectionLugar from '../components/SectionLugar.vue';
import SectionFooterVue from '../components/SectionFooter.vue';
import Boton from '../components/Boton.vue';
import logo from '../assets/img/logo.png'
export default {
    name: 'InvitacionAmigos',
    components: {
        IconBarraSuperiorVue,
        CarrouselVue,
        SectionTitle,
        Timer,
        CronogramaFriends,
        ImageSlider,
        SectionLugar,
        Boton,
        SectionFooterVue
    },
    data() {
        return {
            detalle: 'JUEVES 19 DE SEPTIEMBRE DE 16 A 18 HS.',
            
            text:'MIRÁ TODAS MIS FOTOS EN LA EXCAVADORA AQUÍ',
            logo
        }
    },
    
}
</script>
<template>
    <div class="container_friend container">
        <IconBarraSuperiorVue class="barra_sup" />
        <div class="box_friends">
            <CarrouselVue />
        </div>
        <div class="content_friend">
            <SectionTitle />
            <Timer />
            <p class="text__friends">{{ detalle }}</p>
            <CronogramaFriends />
            <SectionLugar/>
            <ImageSlider/>
            <p class="text__friends">{{ text }}</p>
            <Boton label="¿CÓMO LLEGAR?" customClass="btn-mayor" @click="togglePopUp()" />
        </div>
        <div class="section__redes">
            <img :src="logo" class="img_logo"  alt="">
        </div>
        
    </div>
</template>
<style>
.container_friend {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 2rem;
}

.content_friend {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    width: 100%;
    height: auto;
}

.barra_sup {
    position: absolute;
    top: -4%;
    left: 0;

}

.box_friends {
    height: auto;
    width: 100vw;
    margin: 6% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.text__friends {
    margin-top: 1rem;
    color: var(--color__font-buttom);
    font-family: TobiPro-medium;
    font-size: var(--font-size-16);
}


</style>