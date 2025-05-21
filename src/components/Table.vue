<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { useRouter, RouterLink } from 'vue-router'

const store = useCounterStore()
const { projects, projectsFiltered } = storeToRefs(store)

const router = useRouter()

// const props = defineProps({
//     projects: {
//         type: Array,
//         default: []
//     }
// })

const emit = defineEmits(['clickBoton', 'changeInput'])

function pasarAlPadre() {
    emit('clickBoton', projects.value[0].name)
}
function changeInput() {
    emit('changeInput')
}

function pushRouter(id) {
    const validation = confirm("Está seguro de cambiar de vista?")
    if (validation) {
        router.push({ name: 'tasksView', params: { id: id } })
    }
}

</script>
<template>
    <div class="overflow-hidden">
        <!-- <button class="px-2 border rounded-lg cursor-pointer" @click="pasarAlPadre">Emit</button> -->
        <table class="min-w-full divide-y divide-gray-200">
            <thead>
                <slot name="thead"></slot>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr v-for="(item, index) in projectsFiltered">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">John
                        {{ item.id }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <input type="text" v-model="item.name" @input="changeInput">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{
                        item.description }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ item.status }}
                    </td>
                    <td>
                        <!-- <RouterLink :to="{ name: 'tasksView', params: { id: item.id } }">-></RouterLink> -->
                        <button @click="pushRouter(item.id)">-></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>