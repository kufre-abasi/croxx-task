<template>
  <div class="transaction">
    <div class="transaction__header">
      <h3>Recent transactions</h3>
      <div class="transaction__actions">
        <div class="search">
          <input type="text" id="search" placeholder="search" />
          <i class="uil uil-search"></i>
        </div>
        <div class="table-filter">
          <select id="filter">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
    </div>
    <div class="transaction__table">
      <table>
        <thead>
          <tr>
            <th v-for="header in headers">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in 6">
            <td>Ike Madu</td>
            <td><span class="status failed">pending</span></td>
            <td>49032806808</td>
            <td>Subscription</td>
            <td>Bank</td>
            <td><span class="amount">£1.00</span></td>
          </tr>
        </tbody>
      </table>

      <footer>
        <span class="data-record">Showing 1 to 5 of 5 records</span>

        <div class="pagination">
          <span class="btn previous"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="none"
              stroke="#00afef"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round">
              <polyline points="13 7 8 12 13 17"></polyline></svg
          ></span>
          <span class="page-number">10</span>
          <span class="btn next"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="none"
              stroke="#00afef"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round">
              <polyline points="11 17 16 12 11 7"></polyline></svg
          ></span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
    default: () => ["Date", "Type", "Amount", "Balance"],
  },
});
</script>

<style lang="scss" scoped>
.transaction {
  position: relative;
  width: 100%;
  background-color: $color-white;
  padding: 30px;
  border-radius: 12px;
  margin: 30px 0;

  h3 {
    font-weight: 600;
    font-size: 1 rem;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .search {
      position: relative;
      width: 45%;

      input {
        width: 100%;
        height: 40px;
        border: none;
        background-color: rgba($color: $color-primary, $alpha: 0.1);
        border-radius: 50px;
        outline: none;
        padding: 0 10px 0 40px;
        font-size: 0.8rem;
        text-transform: capitalize;

        &:focus {
          border: 1px solid $color-primary;
        }
      }
      i {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        font-size: 1.3rem;
        color: $color-grey-300;
      }
    }
  }

  &__table {
    width: 100%;
    position: relative;

    table {
      width: 100%;
      text-align: left;

      th {
        color: $color-grey-300;
        padding: 10px 0;
        font-weight: 500;
        font-size: 0.9rem;
      }
      td {
        padding: 20px 0;
        font-size: 0.8rem;

        .status {
          padding: 5px 10px;
          border-radius: 10px;
          text-transform: capitalize;
          font-weight: 600;

          &.pending {
            background-color: rgba($color: $color-warning, $alpha: 0.1);
            color: $color-warning;
          }
          &.done {
            background-color: rgba($color: $color-primary, $alpha: 0.1);
            color: $color-primary;
          }
          &.failed {
            background-color: rgba($color: $color-error, $alpha: 0.1);
            color: $color-error;
          }
        }

        .amount {
          color: $color-primary;
          font-weight: 700;
        }
      }
      tr {
        margin: 10px 0;
      }
    }
    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;

      .data-record {
        font-size: 0.85rem;
      }
      .pagination {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba($color: $color-primary, $alpha: 0.09);
        padding: 5px 0;
        border-radius: 12px;

        span {
          display: inline-block;

          &.page-number {
            margin-inline: 5px;
            color: $color-primary;
            font-weight: 500;
          }
          &.btn {
            font-size: 2rem;
            color: $color-primary;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
