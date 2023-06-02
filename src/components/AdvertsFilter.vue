<template>
  <form
      class="filter-form q-pt-lg q-pb-md">
    <div class="filter-form__row row bg-white">
      <div class="filter-form__item col-3">
        <q-select
            v-model="selectedCountry"
            :options="countryOptions"
            label="Страна"
            outlined
            transition-show="flip-up"
            transition-hide="flip-down"
        />
      </div>
      <div class="filter-form__item col-3">
        <q-select
            v-model="selectedCity"
            :options="cityOptions"
            label="Город"
            outlined
            transition-show="scale"
            transition-hide="scale"
        />
      </div>
      <div class="filter-form__item col-3">
        <q-select
            v-model="selectedService"
            :options="serviceOptions"
            label="Рубрика"
            outlined
            transition-show="jump-up"
            transition-hide="jump-up"
        />
      </div>
      <div class="filter-form__item col-3">
        <q-btn
            type="submit"
            align="left"
            class="filter-form__btn"
            color="secondary"
            label="Search"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      cityOptions: [],
      countryOptions: [],
      serviceOptions: [],
      selectedCity: null,
      selectedCountry: null,
      selectedService: null,
    }
  }
});
</script>

<style lang="scss">
  .filter-form {

    &__item {
      padding: 5px;
    }

    &__btn {
      height: 100%;
      width: 100%;
    }

  }
</style>