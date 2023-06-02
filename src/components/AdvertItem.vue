<template>
  <div class="adv-item bg-white q-mb-md">
    <a class="adv-item__link text-blue text-h5 q-mb-sm">{{ header }}</a>
    <p class="adv-item__keywords text-weight-light">{{ category }}</p>
    <span class="adv-item__author text-blue q-mr-sm">{{ user?.name || '' }}</span>
    <span class="adv-item__date text-grey">{{ formatDate(date) }}</span>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, defineProps } from 'vue'
import dayjs, { Dayjs } from 'dayjs'

import type { IUser } from '@/types/user'
import type { DateType } from '@/types/common'

defineProps({
  id: Number,
  header: String,
  category: String,
  date: {
    type: [Date, String, Number, Dayjs]
  },
  user: Object as PropType<IUser>
})

const formatDate = (date?: DateType) => {
  return dayjs(date).format('DD.MM.YYYY, HH:mm')
}
</script>

<style lang="scss">
.adv-item {
  border: 1px solid #d5d5d6;
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