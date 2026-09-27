import 'virtual:uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import CapabilityMapView from './views/CapabilityMapView.vue'
import CapabilityNodeDetailView from './views/CapabilityNodeDetailView.vue'
import RegistryView from './views/RegistryView.vue'
import RegistryEntryDetailView from './views/RegistryEntryDetailView.vue'

const router = createRouter({
  history: createWebHashHistory('/map/'),
  routes: [
    { path: '/', redirect: '/catalog' },
    { path: '/catalog', component: CapabilityMapView },
    { path: '/catalog/:id', component: CapabilityNodeDetailView },
    { path: '/apps', component: RegistryView },
    { path: '/apps/:id', component: RegistryEntryDetailView },
  ],
})

createApp(App).use(router).mount('#app')
