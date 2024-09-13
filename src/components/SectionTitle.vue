<script>
export default {
    name:'SectionTitle',
    data(){
        return{
            title:'MILO',
            subtitle:'TE INVITO A MI CUMPLE'
        }
    }
}
</script>
<template>
    <div>
        <div class="box_text">
                <h1 class="title_friend">{{ title }}</h1>
                <h4 class="subtitle_friend">{{ subtitle }}</h4>
            </div>
    </div>
</template>
<style>
.box_text{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title_friend{
    color:var(--color__font_title);
    font-family: TobiPro-heavy;
    font-size:4rem;
    line-height: 90%;
}
.subtitle_friend{
    color:var(--color__font_subtitle);
    font-family: TobiPro-heavy;
    font-size: 1.5rem;
    line-height: 70%;
}
</style>