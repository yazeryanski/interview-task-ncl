<template>
  <adverts-filter @change="onFilterChange" />
  <adverts-list v-if="data.adverts.length" :adverts="data.adverts" />
  <adverts-empty-dialoge v-else />
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';

import AdvertsList from '@/components/AdvertsList.vue';
import AdvertsFilter from '@/components/AdvertsFilter.vue';
import AdvertsEmptyDialoge from '@/components/AdvertsEmptyDialoge.vue';

import advertsApi from '@/api/advApi';

import type { IAdvert } from '@/types/avdert';
import type { IFilter } from '@/services/adverts/adverts.js';

interface IData {
  adverts: IAdvert[]
}

const data: IData = reactive({
  adverts: []
})

onMounted( async () => {
  data.adverts = await advertsApi.getAdverts();
})

const onFilterChange = async (filters: IFilter) => {
  data.adverts = await advertsApi.getAdverts(filters)
}

</script>
<style lang="scss" scoped></style>