import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {

  const projects = ref([])

  async function listProjects(){
    const response = await axios.get("https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects")
    console.log(response)
    projects.value = response.data
  }

  return { projects, listProjects }
})
