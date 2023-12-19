<script setup>
import StarSolid from '../components/icons/StarSolid.vue'
import StarEmpty from '../components/icons/StarEmpty.vue'

const props = defineProps(['stars'])

const stars = +props.stars
</script>
<template><StarSolid v-for="i in stars" /><StarEmpty v-for="i in 5 - stars" /></template>
