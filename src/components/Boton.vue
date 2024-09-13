<script>
export default{
    name:'Boton',
    props: {
    label: {
      type: String,
      required: false 
    },
    customClass: {
      type: String,
      default: 'btn-mayor'
    }
  }

}
</script>
<template>
   <button type="button" :class="['btn', customClass, 'btn-lg']">
      {{ label }}
    </button>
</template>
<style>
.btn-mayor{
    width: 200px;
    background: white;
    color:var(--color__font_subtitle);
    border: 1px solid var(--border__btn);
    font-family:TobiPro-extra;
    font-size: var(--font-size-16);
    padding: .575rem 1rem;
}
.btn-mayor:hover{
    background:white;
    color:var(--color__font_subtitle);
    border: 1px solid var(--color__font-buttom);
}
</style>