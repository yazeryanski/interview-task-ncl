<template>
  <div class="adv-item bg-white q-mb-md">
    <a class="adv-item__link text-blue text-h5 q-mb-sm">Мужская и женская стрижка</a>
    <p class="adv-item__keywords text-weight-light">Парикмахерские услуги, уход за телом</p>
    <span class="adv-item__author text-blue q-mr-sm">Anna</span>
    <span class="adv-item__date text-grey">20.02.2023, 09:17</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
})
</script>

<style lang="scss">
.adv-item {
  border: 1px solid #D5D5D6;
  border-radius: 4px;
  padding: 15px;

  &__link {
    display: block;

    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }
  }

  &__author,
  &__date {
    font-size: 14px;
  }
}
</style>