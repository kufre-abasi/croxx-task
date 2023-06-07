<template>
  <div class="chart-container">
    <header>
      <div class="header">
        <h3>Net Income</h3>
        <p>All-time earnings</p>
      </div>
      <div class="value">
        <span class="color"></span>
        <span>VALUE(01)</span>
      </div>
    </header>
    <v-chart class="chart" :option="options" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const options = ref({
  title: {
    text: "Transaction history",
    left: "center",
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["1H", "1D", "1W", "1M", "2M", "1Y", "All time"],
  },
  yAxis: {
    type: "value",
    data: [0, 50, 100, 200],
  },
  series: [
    {
      data: [0, 50, 100, 200],
      type: "line",
      areaStyle: {},
    },
  ],
});
</script>

<style lang="scss" scoped>
.chart-container {
  width: 100%;
  margin: 30px 0;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-weight: 700;
    }
    p {
      color: $color-black-300;
      font-size: 0.8rem;
    }

    .value {
      display: flex;
      align-items: center;

      span {
        color: $color-grey-200;
        font-size: 0.9rem;
      }
    }
    .color {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: $color-primary;
      margin-right: 10px;
    }
  }
}
.chart {
  width: 100%;
  height: 70vh;
}
</style>
