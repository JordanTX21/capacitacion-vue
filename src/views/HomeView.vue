<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { count, input, doubleCount, countArray } = storeToRefs(store)
const { tripleCount } = store

const html = ref(`<strong>Hola html</strong>`)

</script>

<template>
  <main>

    <br>
    <div>Count * 2: {{ doubleCount }}</div>

    <br>
    <div>Count * 3: {{ tripleCount() }}</div>

    <form class="grid gap-y-4 p-4" @submit.prevent="store.save()">
      <div class="max-w-sm space-y-3">
        <input type="text" v-model="input"
          class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border"
          placeholder="This is placeholder">
      </div>
      <div class="max-w-sm space-y-3">
        <button type="submit" class="border border-red-600 text-red-600 rounded p-2 cursor-pointer">Guardar</button>
      </div>
    </form>

    <div class="text-5xl">{{ input }}</div>

    <div>
      <h1 class="text-[#2cdb5b]">Hola mundo!</h1>
      <div v-html="html"></div>
      <div v-text="html"></div>
      <div>{{ html }}</div>
      <br>
      <br>
      <div>Count: {{ count }}</div>
      <br>
      <div v-if="count > 3">Es mayor a 3</div>
      <!-- <div v-else-if="count == 0">Es 0</div>
    <div v-else>Otro caso</div> -->
      <div v-show="count > 3">Show now</div>
      <br>
      <div>Lista:</div>
      <div v-for="(item, index) in countArray">{{ item }}</div>
      <button class="border border-red-600 rounded p-2 cursor-pointer" @click="store.increment()">Increment</button>
      <button class="border border-red-600 rounded p-2 cursor-pointer" @click="store.decrement()">Decrement</button>
    </div>
  </main>
</template>
