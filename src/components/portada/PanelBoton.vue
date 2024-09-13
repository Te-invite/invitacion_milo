<script>
import IconCartel from '../icon/IconCartel.vue';
import IconEscavadora from '../icon/IconEscavadora.vue';
export default {
    name:'PanelBoton',
    components:{
        IconCartel,
        IconEscavadora
    },
    data(){
        return{
            opcion1: 'si sos amiguito/a ingresar aquí',
            opcion2:'si sos familiar ingresar aquí'
        }
    },
    methods: {
        enterFriend() {
            this.$router.push({ name: 'InvitacionAmigos' });
        },
        enterFamily() {
            this.$router.push({ name: 'InvitacionFamilia' });
        }
    }
}
</script>
<template>
    <div>
        <div class="panelControl_home" >
            <IconEscavadora class="icon_escavadora"/>
            <div class="background_btn">
                <button type="button" class="btn btn_control" @click="enterFriend">
                <span class="content_txt_btn">
                    <p class="txt__btn">{{ opcion1 }}</p>
                </span>
            </button>
            </div>
            <div class="background_btn">
                <button type="button" class="btn btn_control">
                <span class="content_txt_btn">
                    <p class="txt__btn">{{ opcion2 }}</p>
                </span>
            </button>
            </div>
        </div>
    </div>
</template>
<style>
.panelControl_home{
    width:100%;
    height:100px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-start;
    gap: 1;
    margin-bottom: 22%;
}
.background_btn{
    position:relative;
    background-image: url('../icon/warning.svg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 190px;
    height:82px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin:0.3rem;
}
.btn_control{
    position:absolute;
    background:#FEFEFE;
    border: none; 
    width:170px;
    height: 70px;
    padding: 1rem;
   
}
.btn_control:hover{
    background: #FEFEFE;
    color:black;
}

.content_txt_btn{
    width:100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.txt__btn{
    font-family: TobiPro-medium;
    color:var(--color__font-buttom);
    font-size: 1rem;
    font-weight: 500;
    line-height: 80%;
    display: inline-block;
    white-space: normal;
    word-wrap: break-word;
    text-align: center;
}

.icon_escavadora{
    width:100px;
    height:70px;
    position:absolute;
    top:-45%;
}
@media (max-width:360px){
    .background_btn{
    width: 160px;
    height:82px;
}
.btn_control{
    width:140px;
    height: 65px;   
}
}
</style>