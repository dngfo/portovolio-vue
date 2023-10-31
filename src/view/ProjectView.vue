<template>
    <p class="text-center mb-3 dark:text-blue-300">project dari <fontawesome icon="fa-brands fa-github"/></p>
    <div class="max-h-[50vh] overflow-auto sm:w-4/12 mx-auto">
        <loader v-if="loading"/>
        <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
        <div v-for="(project, index ) in projects" :key="project.id">
            <a :href="project.html_url" target="_blank">
                <div class="bg-blue-700 mb-4 p-2 rounded-md shadow-md">
                    <h2 class="font-bold text-xl">{{ ++index }} {{ project.name }}</h2>
                    <p>{{ project.full_name }}</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import loader from "../components/Loader.vue";

const projects: any = ref([])
const loading = ref(false);
const error: any = ref(null);

onMounted(async () => {
    try {
        loading.value = true
        const res = await fetch("https://api.github.com/users/dngfo/repos")
        projects.value = await res.json();
        loading.value = false;
    } catch (ex: any) {
        error.value = ex;
        loading.value = false;
    }
})

</script>