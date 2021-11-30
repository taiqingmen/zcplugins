import DropdownList from './dropdownList';
const components = {
    DropdownList,

};

const install = function(Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    })
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export {
    install,
    DropdownList
};
export default {
    install,
    DropdownList
};