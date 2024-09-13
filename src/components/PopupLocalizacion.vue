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
        mapUrl:'https://maps.app.goo.gl/RMnUo7bMcJN1auvZ9'
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
    height:auto;
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