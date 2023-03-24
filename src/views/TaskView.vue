<template>
  <h3 class="q-my-lg">The task</h3>
  <p>Идея была взята с сайта https://vmeste.info/</p>
  <h5 class="q-mb-lg">Задание</h5>
  <ul>
    <li>
      <p>На странице Adverts необходимо добавить фильтр поиска объявлений и список объявлений</p>      
      <img src="../assets/img/filter-example.png" width="800" />
      <br />
      <img src="../assets/img/advert-list-example.png" width="800" />
    </li>
    <li>
      После клика на объявление пользователь попадает на страницу объявления, где может увидеть полное описание и список контактов
      <img src="../assets/img/adv-page.png" width="800" />
    </li>
    <li>На странице Admin пользователь видит только свои объявления. Необходимо добавить две кнопки "Edit" и "Remove" на каждое объявление</li>
    <li>При нажатии на кнопку "Edit" должно появиться модальное окно для редактирования поста</li>
    <li>Ввверху страницы Admin нужно добавить кнопку "Add new post". При нажатии на кнопку появляется модальное окно для создания нового поста</li>
  </ul>
  <h5 class="q-my-lg">Тех. задание</h5>
  <ul>
    <li>Использовать Pinia, Quasar компоненты</li>
    <li>Использовать и модифицировать API (папка /api)</li>
    <li>Не заморачиваться с дизайном - главное функционал</li>
  </ul>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
setup() {
return {};
},
})
</script>
<style lang="scss" scoped>
</style>
