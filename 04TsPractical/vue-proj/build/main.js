'use strict';

var vue = require('vue');

var script = {
  setup(){
    return {
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, "Hello SFC"))
}

script.render = render;
script.__file = "src/SfcDemo.vue";

var Hello = (function () {
  return vue.createVNode("div", null, [vue.createTextVNode("Hello JSX")]);
});

var App = function App() {
  return vue.createVNode("div", null, [vue.createVNode(script, null, null), vue.createVNode(Hello, null, null)]);
};

vue.createApp(App).mount("#root");
