<script>
export default {
    name: 'Actividades',
    data() {
        return {
            hora1: '18:00hs a 20hs',
            hora2: '18:30hs',
            detalle1: 'Recepción de familia y amigos',
            detalle2: 'Maquillaje Artístico'
            
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
.itinerario,
timer{
    text-align: right;
}
.itinerario {
    font-family: TobiPro-regular;
    color: var(--color__font_timer_detalle);
    font-size: 1.2rem;
}

.timer {
    font-family: TobiPro-regular;
    color: black;
    font-size: 16px;
}
.itinerario2,
timer2{
    text-align: left;
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