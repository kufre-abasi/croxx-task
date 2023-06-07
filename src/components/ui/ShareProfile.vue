<template>
  <div class="share">
    <div class="share__text">
      <h3>Share</h3>
      <p>Share website with friends, family & customers</p>

      <div class="share__details">
        <input
          type="text"
          value="https://dev.tryba.io/website/test"
          disabled
          class="share__link" />
        <span class="copy-btn"><i class="uil uil-copy"></i></span>
        <div class="share__actions">
          <button class="btn email">Send email</button>
          <button class="btn whatsapp">Whatsapp</button>
        </div>
      </div>
    </div>
    <div class="share__qrcode">
      <p>Scan QR code or Share using</p>
      <img src="@/assets/img/qrcode.png" alt="qrcode" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.share {
  position: relative;
  width: 100%;
  background-color: $color-white;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__text {
    position: relative;
    // border: 1px solid;
    width: 60%;
    h3 {
      font-weight: 700;
    }
    p {
      color: $color-grey-400;
      margin-bottom: 40px;
      font-size: 0.8rem;
    }
  }
  &__details {
    display: flex;
    align-items: center;
    // justify-content: space-between;

    .share__link {
      width: 50%;
      font-size: 0.75rem;
      background-color: rgba($color: $color-primary, $alpha: 0.1);
      padding: 7px 15px;
      border-radius: 6px;
      margin-right: 15px;
    }
    .copy-btn {
      color: $color-primary;
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        background-color: rgba($color: $color-primary, $alpha: 0.2);
        border-radius: 50%;
        padding: 5px;
      }
    }
    .share__actions {
      display: flex;

      .btn {
        font-size: 0.8rem;
        display: inline-block;
        margin-right: 10px;
        padding: 7px 15px;
        border-radius: 6px;

        &.email {
          background-color: $color-primary;
          color: $color-white;
        }
        &.whatsapp {
          background-color: #06c270;
          color: $color-white;
        }
      }
    }
  }

  &__qrcode {
    p {
      font-size: 0.8rem;
      text-align: center;
      color: $color-grey-300;
      margin-bottom: 10px;
    }
    img {
      margin-inline: auto;
      width: 158px;
      height: 158px;
    }
  }
}
</style>
