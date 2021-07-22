import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const CounterButtonApp = defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick() {
      this.count++;
    },
  },
  template: `<button type="button" @click='onClick()'>{{ count }}</button>`,
});

const app = createApp(CounterButtonApp);

app.mount('#app');
