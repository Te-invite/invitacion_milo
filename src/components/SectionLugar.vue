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
            lugar: 'LA CASITA DE ALICIA CLUB D. INDEPENDENCIA',
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
            <h1 class="title__lugar">{{ lugar }}</h1>
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
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title__lugar {
    font-family: TobiPro-heavy;
    font-size: var(--font-size-24);
    color: var(--color__font_timer);
    text-align: center;
}

.content_lugar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>