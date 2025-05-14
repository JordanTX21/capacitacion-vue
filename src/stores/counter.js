import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const countArray = ref([])
  const input = ref('')

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
    countArray.value.push(count.value)
  }
  function decrement() {
    count.value--
    countArray.value.pop()
  }

  function save(){
    console.log("submit", input.value)
    input.value = ""
  }

  function tripleCount(){
    return count.value * 3
  }

  watch(count,(newValue,oldValue) => {
    console.log("newValue",newValue)
    console.log("oldValue",oldValue)
    if( newValue > 3 ){
      console.log("es mayor a 3")
    }
  })

  return { count, input, countArray, doubleCount, increment, decrement, save, tripleCount }
})
