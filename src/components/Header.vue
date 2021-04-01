<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/collection">Collection</router-link>
      <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>