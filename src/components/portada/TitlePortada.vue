<script>
export default {
    name:'TitlePortada',
    data(){
        return{
            title:'Milo',
            subtitle:'¡Te Invito a mi cumple!'
        }
    }
}
</script>
<template>
    <div>
        <span class="content_title__home">
            <h1 class="title_home">{{ title }}</h1>
            <h4 class="subtitle_home">{{ subtitle }}</h4>
        </span>
    </div>
</template>
<style>
.title_home,
.subtitle_home{
    font-family: 'TobiPro-extra';
    font-weight: 900;
    color:var(--color__title);
    text-align: center;
    
}
.title_home{
    margin-top:2.5rem;
    font-size: 7.5rem;
    line-height: 85%;
    text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
}
.subtitle_home{
    font-size: 1.3rem;
    line-height: 100%;
}
</style>