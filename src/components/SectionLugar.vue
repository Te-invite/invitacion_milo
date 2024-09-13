<script>
import Boton from './Boton.vue';
import PopupLocalizacion from './PopupLocalizacion.vue';
import cartelWarning from '../assets/img/cartelWarning.png';
export default {
    name: 'SectionLugar',
    components:{
        PopupLocalizacion,
        Boton,
    },
    data() {
        return {
            lugar: 'LA CASITA DE ALICIA',
            lugar2:'CLUB D. INDEPENDENCIA',
            cartelWarning,
            popup: false
        }
    },
    methods: {
        togglePopUp() {
            this.popup = !this.popup
        }
    }
}
</script>
<template>
    <div>
        <div class="sectio_lugar">
            <span class="section_lugar__title">
                <h1 class="title__lugar">{{ lugar }}</h1>
                <h1 class="title__lugar">{{ lugar2 }}</h1>
            </span>
            <div class="content_lugar">
                <img :src="cartelWarning" alt="cartel">
                <div class="container__button">
                    <PopupLocalizacion v-show="popup" @close="togglePopUp()" />
                    <Boton label="¿CÓMO LLEGAR?" customClass="btn-mayor" @click="togglePopUp()" />
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.sectio_lugar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:25%;
}
.section_lugar__title{
    width:100%;
    margin:.5rem 0;
}
.title__lugar {
    font-family: TobiPro-heavy;
    font-size: var(--font-size-24);
    color: var(--color__font_timer);
    text-align: center;
    line-height:1rem;
}

.content_lugar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>