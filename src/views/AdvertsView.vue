<template>
  <adverts-filter />
  <adverts-list :adverts="data.adverts" />
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';

import AdvertsList from '@/components/AdvertsList.vue';
import AdvertsFilter from '@/components/AdvertsFilter.vue';

import { getAdverts } from '@/services/adverts.js';

import type { IAdvert } from '@/types/avdert';

interface IData {
  adverts: IAdvert[]
}

const data: IData = reactive({
  adverts: []
})

onMounted(() => {
  data.adverts = getAdverts();
})

</script>
<style lang="scss" scoped></style>