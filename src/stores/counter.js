import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {

  const projects = ref([])
  const name = ref('')
  const description = ref('')

  async function listProjects(){
    const response = await axios.get("https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects")
    console.log(response)
    projects.value = response.data
  }

  async function listTasks(id){
    const response = await axios.get(`https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/tasks?projectId=${id}`)
    console.log(response)
    projects.value = response.data
  }

  const projectsFiltered = computed(() => {
    if(name.value.length > 0 || description.value.length > 0){
      return projects.value.filter((item) => item.name.includes(name.value) && item.description.includes(description.value))
    }
    return projects.value
  })

  return { projects, projectsFiltered, name, description, listProjects, listTasks }
})
