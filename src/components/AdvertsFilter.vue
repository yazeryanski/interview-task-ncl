<template>
  <form
    @submit.prevent="onSubmit"
    class="filter-form q-pt-lg q-pb-md"
  >
    <div class="filter-form__row row bg-white">
      <div class="filter-form__item col-3">
        <q-select
          @update:model-value="onCountryChange"
          clearable
          v-model="data.selectedCountry"
          class="q-custom-field"
          popup-content-class="q-popup-class"
          :options="data.countryOptions"
          label="Страна"
          outlined
          transition-show="flip-up"
          transition-hide="flip-down"
        />
      </div>
      <div class="filter-form__item col-3">
        <q-select
          clearable
          v-model="data.selectedCity"
          :options="data.cityOptions"
          label="Город"
          outlined
          popup-content-class="q-popup-class"
          class="q-custom-field"
          transition-show="scale"
          transition-hide="scale"
        />
      </div>
      <div class="filter-form__item col-3">
        <q-select
          v-model="data.selectedCategory"
          clearable
          :options="data.categoryOptions"
          label="Рубрика"
          popup-content-class="q-popup-class"
          class="q-custom-field"
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

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { getCategories, getCities, getCountries } from '@/services/adverts/filter.js';

const emit = defineEmits(['change']);

interface IData {
  cityOptions: string[],
  countryOptions: string[],
  categoryOptions: string[],
  selectedCity: string | null,
  selectedCountry: string | null,
  selectedCategory: string | null,
}

const data: IData = reactive({
  cityOptions: [],
  countryOptions: [],
  categoryOptions: [],
  selectedCity: null,
  selectedCountry: null,
  selectedCategory: null,
})


onMounted(async () => {
  const [cities, countries, categories] = await Promise.all([getCities(), getCountries(), getCategories()]);
  data.cityOptions =  cities;
  data.countryOptions =  countries;
  data.categoryOptions =  categories;
})

const onCountryChange = async (value: string) => {
  data.cityOptions = await getCities(value);
  if (!data.selectedCity) return;
  if (data.cityOptions.indexOf(data.selectedCity) === -1) data.selectedCity = null;
}

const onSubmit = () => {
  emit('change', {
    city: data.selectedCity,
    country: data.selectedCountry,
    category: data.selectedCategory
  })
}
</script>

<style lang="scss">.filter-form {
  &__item {
    padding: 5px;
  }

  &__btn {
    height: 100%;
    width: 100%;
  }
}

.q-custom-field .q-field__native span {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: capitalize;
}

.q-popup-class {
  text-transform: capitalize;
}</style>

