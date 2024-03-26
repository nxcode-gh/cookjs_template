import { createApp } from '@nxcode-npm/cookjs'
import { AppConfig } from '@nxcode-npm/cookjs'
import { Appx } from '@nxcode-npm/cookjs/src/lib/App'
import "./src/styles/styles.scss"
import { appRouter } from './src/router'
import { IndexPage } from './src/pages/index-page/index-page.component'
import { HomePage } from './src/pages/home-page/home-page.component'
import { MessageComponent } from './src/components/msg/msg.component'

customElements.define('index-page', IndexPage)
customElements.define('home-page', HomePage)
customElements.define('msg-component', MessageComponent)

window.onload = ()=> {
    createApp({name:'cookjs-test', mode:'test', state:{}, theme:{}, router:appRouter,
    options:{shadowDOM:false}},{name:'index', params:{}})
}
