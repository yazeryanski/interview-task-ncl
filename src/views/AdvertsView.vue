<template>
  <adverts-filter />
  <advert-item />
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import AdvertItem from '@/components/AdvertItem.vue';
import AdvertsFilter from '@/components/AdvertsFilter.vue';

export default defineComponent({
  components: { AdvertItem, AdvertsFilter },
  setup() {
    return {};
  },
})
</script>
<style lang="scss" scoped></style>