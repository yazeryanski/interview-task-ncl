<template>
  <advert-item 
    v-for="ad in adverts" 
    :key="ad.id" 
    :header="ad.header"
    :category="ad.serviceType"
    :date="ad.date"
    :user="ad.user"
   />
</template>

<script lang="ts" setup>
import { defineProps, type PropType } from 'vue'

import AdvertItem from './AdvertItem.vue'

import type { IAdvert } from '@/types/avdert'

defineProps({
  adverts: Array as PropType<IAdvert[]>
})
</script>
