<template>
  <div class="card">
    <h3>Cards</h3>
    <div class="card__container">
      <div class="card__img">
        <img src="@/assets/img/tryba-card-2.png" alt="Atm card" />
        <img src="@/assets/img/tryba-card.png" alt="Atm card" />
      </div>
    </div>
    <div class="card__text">
      <router-link to="#">Manage cards</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  width: 100%;
  position: relative;
  background-color: rgba(255, 204, 0, 0.24);
  border-radius: 12px;
  overflow: hidden;
  padding: 1rem;

  &:hover {
    h3 {
      transform: translateY(-100px);
    }
    img:last-child {
      top: -30px;
      transform: scaleY(1.2);
      object-fit: cover;
    }
    .card__text {
      transform: translateY(0%);
    }
  }

  h3 {
    text-align: center;
    font-weight: 700;
    transition: 0.3s ease;
  }

  &__container {
    position: relative;
    width: 100%;
  }
  &__img {
    bottom: -40px;
    height: 100%;
    transform: translateY(40px) scale(1.05);

    img {
      position: relative;

      &:first-child {
        transform: scale(0.9) translateY(-25px);
      }

      &:last-child {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        transition: 0.3s ease;
      }
    }
  }
  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    background: linear-gradient(
      0deg,
      #2c2c2c 12.59%,
      rgba(44, 44, 44, 0) 72.97%
    );
    text-align: center;
    transform: translateY(100%);
    transition: 0.3s ease;

    a {
      color: $color-white;
      outline: 1px solid $color-white;
      padding: 10px 20px;
      font-size: 0.75rem;
      border-radius: 10px;

      &:hover {
        background-color: $color-white;
        background-color: rgba($color: $color-white, $alpha: 0.8);
        color: $color-black-900;
      }
    }
  }
}
</style>
