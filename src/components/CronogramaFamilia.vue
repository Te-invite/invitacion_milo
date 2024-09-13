<script>
import IconEscavadoraVue from '../components/icon/IconEscavadora.vue';
import IconBarraInferior from './icon/IconBarraInferior.vue';
import Actividades2 from './Actividades2.vue';
export default {
    name: 'CronogramaFriends',
    components: {
        IconEscavadoraVue,
        IconBarraInferior,
        Actividades2
    },
    data() {
        return {
            title: 'CRONOGRAMA DE ACTIVIDADES',
            detalle2:'y muchas sorpresas...'
        }
    }

}
</script>
<template>
    <div class="container_cronograma container">
        <div class="barra_warning">
            <IconEscavadoraVue class="esc" />
            <IconBarraInferior class="barra barra_custom" />
        </div>
        <div class="content_cronograma">
            <h1 class="title_cronog">{{ title }}</h1>
            <Actividades2/>
            <p class="text__friends">{{ detalle2 }}</p>
            <div></div>
            <div class="barra_warning">
                <IconBarraInferior class="barra barra2" />
            </div>
        </div>

        
    </div>
</template>
<style>
.container_cronograma {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 2rem;
}

.barra_warning {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.barra {
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    z-index: 0;
}
.barra_custom{
    margin:0 auto;
}
.barra2{
    margin-top:2rem
}
.esc {
    position: relative;
    top:-50%;
    z-index: 1;
}

.title_cronog {
    color: var(--color__font-buttom);
    font-family: TobiPro-extra;
    text-align: center;
}
.content_cronograma{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>