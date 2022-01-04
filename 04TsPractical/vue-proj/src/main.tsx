import { createApp } from 'vue'

import SfcDemo from './SfcDemo.vue'
import Hello from './Hello'

const App = () => {
  return <div>
    <SfcDemo />
    <Hello />
  </div>
}

createApp(App).mount("#root")