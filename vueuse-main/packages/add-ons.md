# Add-ons

The core package aims to be lightweight and dependence free. While the add-ons are wrapping popular packages into the consistent API style.


## Head - [`@vueuse/head`](https://github.com/vueuse/head) <carbon-link class="external-link"/>
Document head manager for Vue 3. SSR ready. Created and maintained by [@egoist](https://github.com/egoist)

## Motion - [`@vueuse/motion`](https://github.com/vueuse/motion) <carbon-link class="external-link"/>

**Vue Composables** putting your **components** in **motion**.

- ๐ **Smooth animations** based on [**Popmotion**](https://popmotion.io/)
- ๐ฎ **Declarative** API
- ๐ **Plug** & **play** with **10+ presets**
- โ Supports **Vue 2 & 3** using [**vue-demi**](https://github.com/antfu/vue-demi)
- ๐ Supports **Nuxt** using [**nuxt-use-motion**](https://github.com/Tahul/nuxt-use-motion)
- โจ Written in **TypeScript**
- ๐๏ธโโ๏ธ Lightweight with **<20kb** bundle size

> Created and maintained by [@Tahul](https://github.com/Tahul)

## Gesture - [`@vueuse/gesture`](https://github.com/vueuse/gesture) <carbon-link class="external-link"/>

**Vue Composables** making your app **interactive**

- ๐ **Plug** & **play**
- ๐น **Mouse** & **Touch** support
- ๐ฎ **Directives** support (**v-drag**, **v-pinch**, **v-move**...)
- โจ Written in **TypeScript**
- โ Supports **Vue 2 & 3** using [**vue-demi**](https://github.com/antfu/vue-demi)
- ๐คน Plays well with [**vueuse/motion**](https://github.com/vueuse/motion) or **any other** animation solution

> Created and maintained by [@Tahul](https://github.com/Tahul)

## Sound - [`@vueuse/sound`](https://github.com/vueuse/sound) <carbon-link class="external-link"/>
Vue composables for playing sound effects.

- ๐ Lets your website **communicate** using 2 **human senses** instead of 1
- ๐ฅ Built with **Vue** Composition API
- โ Supports **Vue 2 & 3** using [**vue-demi**](https://github.com/antfu/vue-demi)
- ๐ Supports **Nuxt** using [**nuxt-use-sound**](https://github.com/Tahul/nuxt-use-sound)
- โก๏ธ **<1kb** bytes (gzip) in your **bundle**! **~10kb** loaded **async**.
- โจ Built with **TypeScript**
- ๐ฃ Uses a powerful, battle-tested audio utility: [**Howler.js**](https://howlerjs.com/)

> Created and maintained by [@Tahul](https://github.com/Tahul)

## SchemaOrg - [`@vueuse/schema-org`](https://github.com/vueuse/schema-org) <carbon-link class="external-link"/>

Schema.org for Vue. Supports typed and automated Google Rich Results

- ๐ No Schema knowledge required, get up and running in minutes with minimal configuration
- โจ 20+ Typed Schemas for best practice ([Google](https://developers.google.com/search/docs/advanced/structured-data/search-gallery), [Yoast](https://developer.yoast.com/features/schema/overview)) Rich Results
- ๐ง Automated Schema: `@id`, URL / date resolving, route meta and more
- ๐ค Integrations for [VitePress](https://vitepress.vue.com), [Nuxt](https://nuxtjs.org/), [Vitesse](https://nuxtjs.org/) and [Vite](https://vitejs.dev/) with auto-imports
- ๐ Choose your preferred API: Composables or Components
- ๐ณ SSR, tree-shaking and Schema inheritance ready

> Created and maintained by [@harlan-zw](https://github.com/harlan-zw)

<!--GENERATED LIST, DO NOT MODIFY MANUALLY-->
<!--ADDONS_LIST_STARTS-->
## Router - [`@vueuse/router`](https://vueuse.org/router/README.html)
Utilities for vue-router
  - [`useRouteHash`](https://vueuse.org/router/useRouteHash/) โ shorthand for reactive route.hash
  - [`useRouteQuery`](https://vueuse.org/router/useRouteQuery/) โ shorthand for reactive route.query


## Integrations - [`@vueuse/integrations`](https://vueuse.org/integrations/README.html)
Integration wrappers for utility libraries
  - [`useAxios`](https://vueuse.org/integrations/useAxios/) โ wrapper for [`axios`](https://github.com/axios/axios)
  - [`useChangeCase`](https://vueuse.org/integrations/useChangeCase/) โ wrapper for [`change-case`](https://github.com/blakeembrey/change-case)
  - [`useCookies`](https://vueuse.org/integrations/useCookies/) โ wrapper for [`universal-cookie`](https://www.npmjs.com/package/universal-cookie)
  - [`useDrauu`](https://vueuse.org/integrations/useDrauu/) โ reactive instance for [drauu](https://github.com/antfu/drauu)
  - [`useFocusTrap`](https://vueuse.org/integrations/useFocusTrap/) โ reactive wrapper for [`focus-trap`](https://github.com/focus-trap/focus-trap)
  - [`useFuse`](https://vueuse.org/integrations/useFuse/) โ easily implement fuzzy search using a composable on top of the zero-dependency library [Fuse.js](https://github.com/krisk/fuse)
  - [`useJwt`](https://vueuse.org/integrations/useJwt/) โ wrapper for [`jwt-decode`](https://github.com/auth0/jwt-decode)
  - [`useNProgress`](https://vueuse.org/integrations/useNProgress/) โ reactive wrapper for [`nprogress`](https://github.com/rstacruz/nprogress)
  - [`useQRCode`](https://vueuse.org/integrations/useQRCode/) โ wrapper for [`qrcode`](https://github.com/soldair/node-qrcode)


## RxJS - [`@vueuse/rxjs`](https://vueuse.org/rxjs/README.html)
Enables RxJS reactive functions in Vue
  - [`from`](https://vueuse.org/rxjs/from/) โ / fromEvent
  - [`toObserver`](https://vueuse.org/rxjs/toObserver/) โ sugar function to convert a ref in an observer
  - [`useObservable`](https://vueuse.org/rxjs/useObservable/) โ use an Observable
  - [`useSubject`](https://vueuse.org/rxjs/useSubject/) โ bind Subject to ref and propagate value changes both ways
  - [`useSubscription`](https://vueuse.org/rxjs/useSubscription/) โ uses subscriptions without worry about unsubscribing to it or memory leaks


## Firebase - [`@vueuse/firebase`](https://vueuse.org/firebase/README.html)
Enables realtime bindings for Firebase
  - [`useAuth`](https://vueuse.org/firebase/useAuth/) โ reactive [Firebase Auth](https://firebase.google.com/docs/auth) binding
  - [`useFirestore`](https://vueuse.org/firebase/useFirestore/) โ reactive [Firestore](https://firebase.google.com/docs/firestore) binding
  - [`useRTDB`](https://vueuse.org/firebase/useRTDB/) โ reactive [Firebase Realtime Database](https://firebase.google.com/docs/database) binding


## Electron - [`@vueuse/electron`](https://vueuse.org/electron/README.html)
Electron renderer process modules for VueUse
  - [`useIpcRenderer`](https://vueuse.org/electron/useIpcRenderer/) โ provides [ipcRenderer](https://www.electronjs.org/docs/api/ipc-renderer) and it's all APIs
  - [`useIpcRendererInvoke`](https://vueuse.org/electron/useIpcRendererInvoke/) โ reactive [ipcRenderer.invoke API](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererinvokechannel-args) result
  - [`useIpcRendererOn`](https://vueuse.org/electron/useIpcRendererOn/) โ use [ipcRenderer.on](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener) with ease and [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) automatically on unmounted
  - [`useZoomFactor`](https://vueuse.org/electron/useZoomFactor/) โ reactive [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) zoom factor
  - [`useZoomLevel`](https://vueuse.org/electron/useZoomLevel/) โ reactive [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) zoom level


<!--ADDONS_LIST_ENDS-->
