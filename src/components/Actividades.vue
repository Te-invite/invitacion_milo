<script>
export default {
    name: 'Actividades',
    data() {
        return {
            hora1: '16:00hs',
            hora2: '16:30hs',
            hora3: '17:00hs',
            detalle1: 'Recepción',
            detalle2: 'Clase de Yoga',
            detalle3: 'Maquillaje Artístico'
            
        }
    }
}
</script>
<template>
    <div>
        <div class="section_cronograma">
            <div class="section">
                <div class="cronograma__data">
                    <div>
                        <h4 class="timer">{{ hora1 }}</h4>
                        <h4 class="itinerario">{{ detalle1 }}</h4>
                    </div>
                    <div>
                        <span class="rouder"></span>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="cronograma__data">
                    <div></div>
                    <div>
                        <span class="rouder"></span>
                        <span class="line"></span>
                    </div>
                    <div>
                        <h4 class="timer timer2">{{ hora2 }}</h4>
                        <h4 class="itinerario itinerario2">{{ detalle2 }}</h4>
                    </div>
                </div>
                <div class="cronograma__data">
                    <div>
                        <h4 class="timer ">{{ hora3 }}</h4>
                        <h4 class="itinerario ">{{ detalle3 }}</h4>
                    </div>
                    <div>
                        <span class="rouder"></span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<style>
.section_cronograma {
    display: grid;
    display: flex;
    justify-content: center;
    width: 100%;
}

.section {
    width: 90%;
}

.cronograma__data {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
}

.itinerario {
    font-family: TobiPro-regular;
    color: var(--color__font_timer_detalle);
    font-size: 1.2rem;
    text-align:right;
}

.timer {
    font-family: TobiPro-regular;
    color: black;
    font-size: 16px;
    text-align:right;
}
.itinerario2 {
    text-align:left;
}

.timer2 {
    text-align:left;
}

.rouder {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    z-index: 1;
    position: relative;
    background: #FFB201;
    border-radius: 50%;
}

.line {
    display: block;
    width: 1px;
    height: 100%;
    background: black;
    transform: translate(8px, -7px);
}
</style>