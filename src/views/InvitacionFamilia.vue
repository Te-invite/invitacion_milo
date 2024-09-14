<script>
import CarrouselVue from '../components/Carrousel.vue';
import IconBarraSuperiorVue from '../components/icon/IconBarraSuperior.vue';
import SectionTitle from '../components/SectionTitle.vue';
import Timer2 from '../components/Timer/Timer2.vue';
import ImageSlider from '../components/ImageSlider.vue';
import SectionLugar from '../components/SectionLugar.vue';
import Boton from '../components/Boton.vue';
import logo from '../assets/img/logo.png'
import CronogramaFamiliaVue from '../components/CronogramaFamilia.vue';
import SectionRedes from '../components/SectionRedes.vue';
export default {
    name: 'InvitacionFamilia',
    components: {
        IconBarraSuperiorVue,
        CarrouselVue,
        SectionTitle,
        Timer2,
        CronogramaFamiliaVue,
        ImageSlider,
        SectionLugar,
        Boton,
        SectionRedes 
    },
    data() {
        return {
            detalle: 'JUEVES 19 DE SEPTIEMBRE DE 18 A 20 HS.',
            text:'MIRÁ TODAS MIS FOTOS EN LA EXCAVADORA AQUÍ',
            logo
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
    <div class="container_family container">
        <IconBarraSuperiorVue class="barra_sup" />
        <div class="box_family">
            <CarrouselVue />
        </div>
        <div class="content_family">
            <SectionTitle />
            <Timer2 />
            <span class="container__text_family">
                <p class="text__family">{{ detalle }}</p>
            </span>
            <CronogramaFamiliaVue />
            <SectionLugar/>
            <ImageSlider/>
            <p class="text__family">{{ text }}</p>
            <Boton label="VER MIS FOTOS" customClass="btn-mayor" @click="enterGalery()" />
        </div>
        <SectionRedes/> 
    </div>
</template>
<style>
.container_family {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.content_family {
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

.box_family {
    height: auto;
    width: 100vw;
    margin: 6% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.container__text_family{
    width:320px;
}
.text__family {
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
    .box_family{
        margin:0;
    }
}

</style>