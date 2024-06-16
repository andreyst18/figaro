<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="header">
        <img class="header__car" src="../assets/images/car.png" alt="car">
        <img class="header__car-shadow" src="../assets/images/shadow.png" alt="shadow">
        <img class="header__logo" src="../assets/images/logo.svg" alt="logo">
        <button class="header__btn">
          <span>Тест-драйв</span>
          <img src="../assets/images/arrow.svg" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  background: url('../assets/images/figaro_title.svg') top 122px right 152px no-repeat, url('../assets/images/moutains.png') bottom 132px right / 100% no-repeat, #0ABAB5;

  @media (max-width: 1239px) {
    background: url('../assets/images/figaro_title.svg') bottom 50% left 50% / 70% no-repeat, url('../assets/images/moutains.png') bottom 50% right / 100% no-repeat, #0ABAB5;
  }

  @media (max-width: 709px) {
    background: url('../assets/images/figaro_title.svg') bottom 30% left 50% / 70% no-repeat, url('../assets/images/moutains.png') bottom 30% right / 100% no-repeat, #0ABAB5;
  }

}
.header {
  height: 464px;
  position: relative;
  margin-bottom: 60px;

  @media (max-width: 929px) {
    height: 390px;
    margin-bottom: 0;
  }

  @media (max-width: 709px) {
    height: 292px;
  }

  
  &__car {
    position: absolute;
    left: calc(173px + 282px);
    top: 182px;
    z-index: 1;

    @media (max-width: 1239px) {
      width: 550px;
      left: auto;
      right: 100px;
      top:255px;
    }

    @media (max-width: 929px) {
      width: 430px;
      top: 222px;
      right: 55px;
    }

    @media (max-width: 709px) {
      width: 300px;
      top: 190px;
      right: 50px;
    }

    @media (max-width: 509px) {
      display: none;
    }

  }

  &__car-shadow {
    position: absolute;
    bottom: -77px;
    left: 425px;    
    mix-blend-mode: multiply;

    @media (max-width: 1239px) {
      width: 590px;
      bottom: -77px;
      left: auto;
      right: 77px;
    }

    @media (max-width: 929px) {
      width: 464px;
      bottom: -59px;
      right: 37px;
    }

    @media (max-width: 709px) {
      width: 327px;
      bottom: -55px;
    }

    @media (max-width: 509px) {
      display: none;
    }
  }

  &__btn {
    padding: 10px 14px 12px 20px;
    font-family: 'Nissan Brand Regular';
    font-size: 16px;
    border: none;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 64px;

    @media (max-width: 709px) {
      right: 10px;
      top: 20px;
      left: auto;
      bottom: auto;
    }
    

    span {
      margin-right: 138px;

      @media (max-width: 1239px) {
        margin-right: 40px;
      }
    }
  }

  &__logo {
    position: absolute;
    bottom: calc(-1 * (37px + 19px));
    right: 33px;

    @media (max-width: 1239px) {
      bottom: -69px;
    }

    @media (max-width: 929px) {
      width: 70px;
      bottom: -50px;
      right: 20px;
    }

    @media (max-width: 709px) {
      bottom: -63px;
    }

    @media (max-width: 509px) {
      display: none;
    }

  }

}
</style>