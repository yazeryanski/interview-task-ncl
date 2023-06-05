<template>
  <adverts-filter @change="onFilterChange" />
  <adverts-list :adverts="data.adverts" />
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';

import AdvertsList from '@/components/AdvertsList.vue';
import AdvertsFilter from '@/components/AdvertsFilter.vue';

import { getAdverts } from '@/services/adverts/adverts.js';

import type { IAdvert } from '@/types/avdert';
import type { IFilter } from '@/services/adverts/adverts.js';

interface IData {
  adverts: IAdvert[]
}

const data: IData = reactive({
  adverts: []
})

onMounted(() => {
  data.adverts = getAdverts();
})

const onFilterChange = (filters: IFilter) => {
  data.adverts = getAdverts(filters)
}

</script>
<style lang="scss" scoped></style>