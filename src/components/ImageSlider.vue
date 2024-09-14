<script>
//Imágenes
import carrusel1 from '../assets/img/carrusel/Milo(2).jpg';
import carrusel2 from '../assets/img/carrusel/Milo(5).jpg';
import carrusel3 from '../assets/img/carrusel/Milo(11).jpg';
import carrusel4 from '../assets/img/carrusel/Milo(21).jpg';
import carrusel5 from '../assets/img/carrusel/Milo(24).jpg';
import carrusel6 from '../assets/img/carrusel/Milo(27).jpg';
import carrusel7 from '../assets/img/carrusel/Milo(34).jpg';
import carrusel8 from '../assets/img/carrusel/Milo(39).jpg';
import carrusel9 from '../assets/img/carrusel/Milo(41).jpg';
import carrusel10 from '../assets/img/carrusel/Milo(43).jpg';
import carrusel11 from '../assets/img/carrusel/Milo(50).jpg';

export default {
  data() {
    return {
      images: [
        { img: carrusel1 },
        { img: carrusel2 },
        { img: carrusel3 },
        { img: carrusel4 },
        { img: carrusel5 },
        { img: carrusel6 },
        { img: carrusel7 },
        { img: carrusel8 },
        { img: carrusel9 },
        { img: carrusel10 },
        { img: carrusel11 }
      ],
      isDragStart: false,
      isDragging: false,
      prevPageX: 0,
      prevScrollLeft: 0,
      positionDiff: 0,
      currentIndex: 0, // Agregado para trackear el índice actual
      autoScrollInterval: null // Intervalo para el auto-scroll
    };
  },
  methods: {
    showHideIcons() {
      const carousel = this.$refs.carousel;
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      this.$refs.left.style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
      this.$refs.right.style.display = Math.ceil(carousel.scrollLeft) >= scrollWidth ? 'none' : 'block';
    },
    scroll(direction) {
      const carousel = this.$refs.carousel;
      const firstImg = carousel.querySelectorAll('img')[0];
      const firstImgWidth = firstImg.clientWidth + 14;
      carousel.scrollLeft += direction === 'left' ? -firstImgWidth : firstImgWidth;
      setTimeout(this.showHideIcons, 60);
    },
    autoScroll() {
      this.autoScrollInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length; // Avanzar al siguiente índice
        const carousel = this.$refs.carousel;
        const firstImgWidth = carousel.querySelector('img').clientWidth + 14;
        carousel.scrollLeft = this.currentIndex * firstImgWidth; // Desplazar el carrusel
        this.applyFadeInEffect(); // Aplicar el efecto de fade in
      }, 3000); // Cambia cada 3 segundos
    },
    applyFadeInEffect() {
      const carousel = this.$refs.carousel;
      const images = carousel.querySelectorAll('img');
      images.forEach((img, index) => {
        img.classList.remove('fade-in');
        if (index === this.currentIndex) {
          img.classList.add('fade-in');
        }
      });
    },
    stopAutoScroll() {
      if (this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval); // Detener el desplazamiento automático si es necesario
      }
    },
    mounted() {
      this.showHideIcons();
      this.autoScroll(); // Iniciar el desplazamiento automático
    },
    beforeDestroy() {
      this.stopAutoScroll(); // Detener el desplazamiento automático al destruir el componente
    }
  }
}
</script>

<template>
  <div class="contentSlide">
    <div class="wrapper">
      <i ref="left" id="left" @click="scroll('left')" class="fa-solid fa-chevron-left"></i>
      <div class="carousel" ref="carousel" @mouseup="dragStop" @mouseleave="dragStop" @touchend="dragStop">
        <img v-for="(image, index) in images" 
        :key="index" :src="image.img" 
        alt="" draggable="false">

      </div>
      <i ref="right" id="right" @click="scroll('right')" class="fa-solid fa-chevron-right icon"></i>
    </div>
  </div>
</template>

<style scoped>
.contentSlide {
  display: flex;
  width: 100%;
  height: 360px;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  margin-top:1rem;

}

.wrapper {
  display: flex;
  width: 100%;
  position: relative;
  border-radius: 9px;
}

.wrapper i {
  top: 50%;
  height: 44px;
  width: 44px;
  font-size: 1.15rem;
  color: white;
  text-align: center;
  line-height: 46px;
  border-radius: 50%;
  position: absolute;
  transform: translateY(-50%);
  transition: transform .1s linear;
  z-index: 2;
  display: block;
  background: rgba(0, 0, 0, .1);
  border: 1px solid rgba(255, 255, 255, .2);
}

.wrapper i:active {
  transform: translateY(-50%) scale(0.9);
  background: rgba(0, 0, 0);
}

.wrapper i:hover {
  background: rgba(0, 0, 0, .5);
  border: 1px solid rgba(255, 255, 255, .5);
}

.wrapper i:first-child {
  left: 5px;
  display: none;
}

.wrapper i:last-child {
  right: 5px;
}

.wrapper .carousel {
  font-size: 0px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  scroll-behavior: smooth;
}

.carousel.dragging {
  scroll-behavior: auto;
}

.carousel img {
  height: 300px;
  width: 100%;
  user-select: none;
  margin-left: 14px;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
  border-radius: 9px;
}

.carousel img:first-child {
  margin-left: 0px;
}

@media (min-width: 1025px) {
  .carousel img {
    width: calc(100%/3);
    /* Ajusta esto si es necesario */
    height: 400px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .wrapper {
    max-width: 900px;
  }

  .carousel img {
    width: 100%;
  }
}

@media (min-width: 1025px) {
  .contentSlide {
    margin-bottom: 2.5rem;
    height: auto;

  }

  .wrapper {
    max-width: 1200px;
  }

  .carousel img {
    width: calc(100%/3);
    height: 400px;
  }
}
</style>