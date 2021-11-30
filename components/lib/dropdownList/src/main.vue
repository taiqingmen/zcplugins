<template>
  <div v-show="currentIsShow">
    <div class="alert-wrapper">
      <div class="header">
        <span>{{ title }}</span>
        <div class="closebtn" @click="close()"><span>✖</span></div>
      </div>
      <div class="sec">
        <div class="tab">
          <div class="tab-left">
            <span
              :class="selectChildValue === '' ? 'tabactive' : ''"
              @click="changeParentTab()"
              >{{ selectParentValue }}</span
            >
          </div>
          <div class="tab-right" v-if="selectChildValue !== ''">
            <span class="tabactive">{{ selectChildValue }}</span>
          </div>
          <div class="clear"></div>
        </div>
        <div class="tab-content">
          <div class="parent-content" v-if="selectChildValue === ''">
            <div
              v-for="(item, index) in filterNodes"
              :key="index"
              :value="item.value"
              @click="parentChange(item.key, item.value)"
              :id="'parent_' + item.key"
              :class="selectParentKey === item.key ? 'lineselected' : ''"
            >
              {{ item.value }}
            </div>
          </div>
          <div class="child-content" v-if="selectChildValue !== ''">
            <div
              v-for="item in childNodes"
              v-bind:key="item.key"
              v-bind:value="item.value"
              @click="childChange(item.key, item.value)"
              v-bind:class="selectChildKey === item.key ? 'lineselected' : ''"
            >
              {{ item.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>
<script>
export default {
  name: "m-dropdownlist",
  props: {
    title: "",
    nodes: [],
    isShow: false,
    // selectFun: (...parentKey) => {},
  },
  data() {
    return {
      selectParentKey: -1,
      selectParentValue: "请选择",
      selectChildKey: 0,
      selectChildValue: "",
      childNodes: [],
      filterNodes: [],
      currentIsShow: this.isShow,
    };
  },
  mounted() {
    if (this.nodes.length > 0) {
      console.log("mounted nodes:" + JSON.stringify(this.nodes));
      this.filterNodes = this.nodes.filter((p) => p.name !== "请选择");
    }
  },
  watch: {
    nodes: {
      handler(val, oldVal) {
        console.log("handler nodes:" + JSON.stringify(this.nodes));
        this.filterNodes = this.nodes.filter((p) => p.name !== "请选择");
      },
      deep: true,
    },
  },
  methods: {
    close() {
      this.currentIsShow = false;
    },
    closeMask() {
      this.close();
    },
    parentChange(key, value) {
      this.childNodes = [];
      this.selectParentKey = key;
      this.selectParentValue = value;
      this.getChildAgents();
    },
    getChildAgents() {
      this.selectChildValue = "请选择";
      let parentNodes = this.filterNodes.filter(
        (p) => p.key === this.selectParentKey
      );
      if (parentNodes.length > 0) {
        this.childNodes = parentNodes[0].node;
      }
    },
    childChange(key, value) {
      this.selectChildKey = key;
      this.selectChildValue = value;
      // this.selectFun({
      //   parentKey: this.selectParentKey,
      //   parentValue: this.selectParentValue,
      //   childKey: key,
      //   childValue: value,
      // });
      this.$emit("on-change", {
        parentKey: this.selectParentKey,
        parentValue: this.selectParentValue,
        childKey: key,
        childValue: value,
      });
      this.close();
    },
    changeParentTab() {
      this.selectChildValue = "";
    },
  },
};
</script>
<style scoped>
.alert-wrapper {
  bottom: 0 !important;
  left: 50%;
  margin-left: -50%;
  position: fixed;
  width: 100%;
  /* height: 2.72rem; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 16px;
  background: white;
  z-index: 1000;
  height: 386px;
  text-align: left;
}
.header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 60px;
  line-height: 60px;
  color: #535353;

  position: relative;
  text-align: center;
  /* font-weight: bold; */
}
.closebtn {
  position: absolute;
  font-size: 16px;

  right: 30px;
  top: 24px;
  cursor: pointer;
  line-height: 100%;
}
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 999;
}

.footer {
  margin-bottom: 20px;
}

.tab {
  border-bottom: 1px solid #dddddd;
  padding: 0 20px;
}
.tab-left {
  float: left;
  width: 20%;
  padding-bottom: 4px;
}
.tab-right {
  float: left;
  width: 80%;
}
.sec {
  font-size: 14px;
}
.tabactive {
  color: #2c58d0;
  border-bottom: 2px solid #2c58d0;
  padding-bottom: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.parent-content,
.child-content {
  overflow: scroll;
  line-height: 180%;
  padding: 10px 20px;
}
.tab-content {
  height: 300px;
  overflow: scroll;
}
.lineselected {
  background: url(optselect.png) 100% 50% no-repeat;
  background-size: 13px 9px;
}
.clear {
  clear: both;
}
</style>