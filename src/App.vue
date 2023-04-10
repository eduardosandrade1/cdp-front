<template>

  <Loading v-show="loading" />


  <input type="checkbox" class="visib-hidden" id="c1">
  <input type="checkbox" class="visib-hidden" id="c2" ref="c2">
  <input type="checkbox" class="visib-hidden" id="c3">

  <div class="container__login flip-book hidden-print">

    <LoginPage class="hidden-print" />
    <CoverPage class="hidden-print" />
    <RegisterPage class="hidden-print" />
  </div>
</template>

<script>

import Loading from './components/Loading.vue'
import LoginPage from './components/Pages/Auth/LoginPage.vue'
import CoverPage from './components/Pages/Auth/CoverPAge.vue'
import RegisterPage from './components/Pages/Auth/RegisterPage.vue'

export default {
  data() {
    return {
      loading: false,
    }
  },
  components: {
    Loading,
    LoginPage,
    CoverPage,
    RegisterPage,
  }
}

</script>

<style scoped>
.container__login {
  display: flex;
  justify-content: space-between;
  width: 25vw;
  height: 85vh;
  margin: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  background-color: #F8F8F8;
}

.visib-hidden {
  visibility: hidden;
}

.book {
  display: flex;
}

#cover {
  width: 250px;
  height: 400px;
}

.flip-book {
  position: relative;
  perspective: 1500px;
  /* transform: rotateX(88deg); */
}

.flip-book:active {
  transform: rotateX(0);
  transition: 2s;
}

.flip {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: left;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: 1s;
}

.front {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 13px;
}

.back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  background-color: #000;
}

.next-btn {
  position: absolute;
  bottom: 13px;
  right: 13px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}

.back-btn {
  position: absolute;
  /* bottom: 13px;
  right: 13px; */
  cursor: pointer;
}

#p1 {
  z-index: 3;
}

#p2 {
  z-index: 2;
}

#p3 {
  z-index: 1;
}

#c1:checked~.flip-book #p1 {
  background-color: #000;
  transform: rotateY(-180deg);
  z-index: 1;
}

#c2:checked~.flip-book #p2 {
  transform: rotateY(-180deg);
  z-index: 2;
  background-color: #000;

}

#c3:checked~.flip-book #p3 {
  transform: rotateY(-180deg);
  z-index: 3;
}</style>