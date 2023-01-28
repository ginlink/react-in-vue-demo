<template>
  <h3>s2编辑表示例</h3>
  <h5>100万数据</h5>
  <EditTable />
</template>

<script setup lang="ts">
import ReactEditTable from "./react_app/EditTable";
import { applyReactInVue } from "veaury";

const EditTable = applyReactInVue(ReactEditTable);
</script>

<style scoped></style>
