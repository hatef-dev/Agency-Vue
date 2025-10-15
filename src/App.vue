<template>
  <div class="w-screen overflow-x-hidden">
    <router-view :key="$route.path" />
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
