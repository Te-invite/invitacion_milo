<script>
import logo from '../assets/img/logo.png';
import SectionFooterVue from '../components/SectionFooter.vue';
export default {
    name:'SectionRedes',
    components:{
        SectionFooterVue
    },
    data(){
        return{
            logo
        }
    }
}
</script>
<template>
    <div>
        <div class="section__redes">
            <a href="https://www.instagram.com/teinviteok">
                <img :src="logo" class="img_logo"  alt="">
            </a>
            
        </div>
        <SectionFooterVue class="footer"/> 
    </div>
</template>
<style>
.img_logo{
    width:80px;
    height:auto;
}
.img_logo > img{
    width:100%;
    height:100%;
}
.section__redes{
    margin-top:3rem;
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding-bottom: .5rem;
}
</style>