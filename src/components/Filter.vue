<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { name, description } = storeToRefs(store)
</script>
<template>
    <form class="flex gap-x-2">
        <div class="max-w-sm space-y-3">
            <input type="text"
                class="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Name" v-model="name">
        </div>
        <div class="max-w-sm space-y-3">
            <input type="text"
                class="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Description" v-model="description">
        </div>
    </form>
</template>