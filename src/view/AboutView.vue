<template>
  <div class="text-center">
    <p class="sm:text-center text-justify my-4 sm:w-4/12 mx-auto">
      <codeblock
        :code="kode"
        lang="php"
        :highlightjs="true"
        :copyTab="false"
        :copyIcon="false"
        :copyButton="false"
        theme="neon-bunny-carrot"
        :browser-window="true"
      />
    </p>
  </div>
</template>
<script lang="ts" setup>
const kode: string = `$learning = ["C#", "TYPESCRIPT", "KOTLIN"];

$root = "PHP";`;
</script>
