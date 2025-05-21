<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import Table from '@/components/Table.vue'
import Filter from '@/components/Filter.vue'
// import Table from '../components/Table.vue'

const store = useCounterStore()
const { projects } = storeToRefs(store)

onMounted(() => {
  store.listProjects()
})

function onClickBoton(valor) {
  console.log("onClickBoton", valor)
}

function onChangeInput() {
  console.log("onChangeInput")
}
</script>

<template>
  <main class="p-10">
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <Filter />
          <!-- <Table :projects="projects" /> -->
          <Table @clickBoton="onClickBoton" @changeInput="onChangeInput">
            <template #thead>
              <tr>
                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">ID
                </th>
                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name
                </th>
                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                  Description</th>
                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase ">Status
                </th>
                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase ">Action
                </th>
              </tr>
            </template>
          </Table>
        </div>
      </div>
    </div>
  </main>
</template>
