<script>
import IconLocation from '../components/icon/IconLocation.vue';
import PopupBase from './PopupBase.vue';
export default {
    components: { 
        PopupBase,
        IconLocation 
    },
    data() {
        return {
        infoBtn: '¿CÓMO LLEGAR?',
        modalTitle: 'Cómo llegar a la Fiesta',
        map: 'ABRIR APP',
        mapUrl:'https://maps.app.goo.gl/Lz8eu8t8MmzoLQSRA'
        };
    }, 
    methods:{
        openMap(){
            window.open(this.mapUrl, '_blank');
        }   
    }
};
</script>
<template>
    <popup-base :title="modalTitle" >
        <template #icon>
            <div class="circle">
                    <IconLocation class="icon__circle"/>
            </div>
        </template>
        <div class="modal-body">
            <div class="map-container">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10639.955521609454!2d-60.1009674!3d-38.0265963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9592313fa2c85eff%3A0x5b1253cccbb79323!2sEstadio%20de%20Independencia!5e1!3m2!1ses-419!2sar!4v1726248999629!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <template #footer>
            <button type="button" class="btn btn-mayor" @click="openMap()">{{ map }}</button>
        </template>
    </popup-base>
</template>

<style scoped> 

  
  .btn-mayor:focus,
  .btn-mayor:active {
    outline: none;
    background: white;
    border: 1px solid var(--border__btn);
  }
  
.btn-close::before {
    color: var(--font__primary_dark);
}
.map{
    width:260px;
    height:250px;
}
@media(max-width:320px) {   
    

    .map{
        margin-top:2rem;
        width:200px;
    }
}

@media(max-width:360px) {
    
    .circle{
        width: 45px;
        height:45px;
    }
    
    
}
@media (min-width: 768px) and (max-width: 991px){
    
    .btn-primary{
        width:60%;
    }
}
@media (min-width: 1025px) {
    
    
    .circle{
        width: 90px;
        height:90px;
    }
    .pop-up-footer{
        width:100%;
    }
    .btn-primary{
        width:50%;
    }
}

</style>