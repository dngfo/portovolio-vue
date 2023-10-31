<script setup lang="ts">
import porto from "@/components/Porto.vue";
import fo from "@/components/Fo.vue";
import lio from "@/components/Lio.vue";
import modeToggle from "@/components/ModeToggle.vue";
import { onMounted, ref } from "vue";

//logic
const isDarkMode = ref(false);

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDarkMode.value = true;
  } else {
    isDarkMode.value = false;
  }
});

const toggleDarkMode = () => {
  if (isDarkMode.value) {
    localStorage.tehem = "light";
    isDarkMode.value = false;
  } else {
    localStorage.tehem = "dark";
    isDarkMode.value = true;
  }
};
</script>

<template>
  <div :class="isDarkMode ? 'dark' : ''" class="bg-blue-100 min-h-screen sm:p-10 p-5 flex flex-col justify-center dark:bg-[#0F172A] duration-500 transition-all ease-in-out">
    <div >
      <button @click="toggleDarkMode" class="animate-pulse">
        <modeToggle
          :class="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
        />
      </button>
      <fo />
      <porto />
      <lio />
    </div>
  </div>
</template>

<style></style>
