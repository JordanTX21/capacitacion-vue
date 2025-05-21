<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log("param id: ", route.params.id)

const store = useCounterStore()
const { projects } = storeToRefs(store)
</script>
<template>
    <div>task view</div>
</template>