<script>
import CarrouselVue from '../components/Carrousel.vue';
import IconBarraSuperiorVue from '../components/icon/IconBarraSuperior.vue';
import SectionTitle from '../components/SectionTitle.vue';
import Timer from '../components/Timer/Timer.vue';
import CronogramaFriends from '../components/CronogramaFriends.vue';
import ImageSlider from '../components/ImageSlider.vue';
import SectionLugar from '../components/SectionLugar.vue';
import Boton from '../components/Boton.vue';
import SectionRedes from '../components/SectionRedes.vue';

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
        SectionRedes
    },
    data() {
        return {
            detalle: 'JUEVES 19 DE SEPTIEMBRE DE 16 A 18 HS.',
            text:'MIRÁ TODAS MIS FOTOS EN LA EXCAVADORA AQUÍ',            
        }
    },
    methods: {
        enterGalery() {
            this.$router.push({ name: 'Galeria' });
        }
    }
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
            <span class="container__text_friends">
                <p class="text__friends">{{ detalle }}</p>
            </span>
            <CronogramaFriends />
            <SectionLugar/>
            <ImageSlider/>
            <p class="text__friends">{{ text }}</p>
            <Boton label="VER MIS FOTOS" customClass="btn-mayor" @click="enterGalery()" />
        </div>
        <SectionRedes/>        
    </div>
</template>
<style>
.container_friend {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
.container__text_friends{
    width:320px;
}
.text__friends {
    margin-top: 1rem;
    color: var(--color__font-buttom);
    font-family: TobiPro-medium;
    font-size: var(--font-size-24);
    text-align: center;
}
@media (min-width: 1025px) {
    .barra_sup {
        top:-15%;
    }
    .box_friends{
        margin:0;
    }
}

</style>