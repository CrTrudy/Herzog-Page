import { createApp } from 'vue';

import App from './App.vue';
import PanoramaBanner from './components/PanoramaBanner.vue';
import NavBar from './components/NavBar.vue';
import NavButton from './components/UI/NavButton.vue'

const app = createApp(App);

app.component('panorama-banner', PanoramaBanner);
app.component('nav-bar', NavBar);
app.component('nav-button', NavButton)

app.mount('#app');
