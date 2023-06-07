<template>
  <div class="gigpot">
    <div class="header">
      <h3>Website</h3>
      <p>
        Sell products & services on a single multipurpose and functional
        website.
      </p>
    </div>
    <div class="footer">
      <router-link to="/">Create website</router-link>
      <img src="@/assets/img/chatting.png" alt="office girl" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.gigpot {
  width: 100%;
  height: 100%;
  background-color: rgba(6, 194, 112, 0.12);
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    text-align: center;
    margin: 0 0 5px;
    font-weight: 700;
  }
  p {
    text-align: left;
    font-size: 0.7rem;
  }
  .footer {
    position: relative;
    display: flex;

    a {
      display: inline-block;
      font-size: 0.75rem;
      padding: 10px 10px;
      background-color: $color-primary;
      border-radius: 6px;
      color: $color-white;
    }

    img {
      position: absolute;
      right: 0;
      bottom: 0;
      transform: scale(0.8) translate(25px, 20px);
      // border: 1px solid red;
    }
  }
}
</style>
