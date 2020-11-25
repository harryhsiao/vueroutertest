<template>
  <div class="hello">
    <router-link to="/cardpage/">卡片1</router-link>
    <router-link to="/cardpage/child2">卡片2</router-link>
    <router-link to="/cardpage/child3">卡片3</router-link>
    <div class="card" style="width: 18rem">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>


