<template>
  <h3>基础示例-applyReactInVue</h3>
  <h4>在vue3中使用react组件</h4>
  <Basic :foo="foo" ref="BasicRef" :null="null">
    <div class="slot">这是默认插槽</div>
    <!-- TODO Vue 和 React共存时会引发JSX的TS类型错误.
      https://github.com/devilwjp/veaury/blob/master/README_zhcn.md#vue-%E5%92%8C-react%E5%85%B1%E5%AD%98%E6%97%B6%E4%BC%9A%E5%BC%95%E5%8F%91jsx%E7%9A%84ts%E7%B1%BB%E5%9E%8B%E9%94%99%E8%AF%AF -->
  </Basic>
</template>

<script setup lang="ts">
import ReactBasic from "./react_app/Basic";
import { ref } from "vue";
import { applyReactInVue } from "veaury";

const foo = ref("foo");
const Basic = applyReactInVue(ReactBasic);
</script>

<style scoped>
.slot {
  background: aquamarine;
  padding: 10px;
  margin: 10px;
}
</style>
