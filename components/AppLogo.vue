<template>
  <svg>
    <g>
        <path class="st0" d="M52.5,45.2c-3.6,5.7-9.5,9.9-15.9,11.3C30.2,58,23.3,56.7,18,53.3C12.6,50,8.7,44.4,7.4,38.4
        c-1.4-6-0.2-12.5,3-17.5c3.2-5.1,8.4-8.7,14-9.9c5.6-1.3,11.7-0.2,16.3,2.9c4.7,3,8.1,7.9,9.2,13.1c1.2,5.3,0.1,10.9-2.7,15.2
        L52.5,45.2z M47.3,42.2c2.4-4.6,2.8-10.1,1.3-14.8c-1.5-4.8-5-8.7-9.2-10.9c-4.3-2.2-9.3-2.6-13.7-1.1c-4.4,1.4-8,4.6-10,8.5
        c-2,3.9-2.3,8.5-1,12.5c1.3,4,4.2,7.3,7.8,9.1c3.6,1.8,7.8,2,11.4,0.8c3.6-1.2,6.6-3.9,8.2-7.1L47.3,42.2z"></path>
    </g>
  </svg>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41B883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3B8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495E;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>

