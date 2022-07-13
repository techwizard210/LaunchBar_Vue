import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Libs

import "normalize.css"

// Libs

const app = createApp(App)

import Countdown from 'vue3-flip-countdown'

app.use(Countdown)

// Global Components

import AppButton from './components/App/AppButton'
import AppLogo from './components/App/AppLogo'
import AppInput from './components/App/AppInput'

app.component('AppButton', AppButton)
app.component('AppLogo', AppLogo)
app.component('AppInput', AppInput)

// Global Components

// Mixins

import titleMixin from './mixins/titleMixin'

app.mixin(titleMixin)

// Mixins

app.use(store).use(router).mount('#app')
