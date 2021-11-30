<template>
  <div id="app">
    <DropdownList
      v-if="nodes.length > 0"
      :isShow="true"
      title="测试标题"
      :nodes="nodes"
      @on-change="change"
    ></DropdownList>
    <Demo></Demo>
  </div>
</template>
<script>
import { Demo } from "mooc-ui";
import { DropdownList } from "zcsk-ui-dropdownlist";
export default {
  name: "App",
  data() {
    return {
      nodes: [
        {
          key: "01",
          value: "一群",
          node: [
            {
              key: 1,
              value: "张三",
            },
            {
              key: 2,
              value: "李四",
            },
          ],
        },
        {
          key: "02",
          value: "二群",
          node: [
            {
              key: 3,
              value: "王五",
            },
            {
              key: 4,
              value: "二三只黄鹂鸣翠柳三四行白鹭上青天",
            },
          ],
        },
      ],
    };
  },
  components: { Demo, DropdownList },
  mounted() {
    //     export const agents =
  },
  methods: {
    change(params) {
      console.log(params);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
