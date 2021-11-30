import DropdownList from './src/main.vue'

// eslint-disable-next-line func-names
DropdownList.install = function(Vue) {
    Vue.component(DropdownList.name, DropdownList)
}

export default DropdownList