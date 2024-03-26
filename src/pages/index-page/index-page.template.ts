import { IndexPageData } from "./index-page.component";
import { html } from "lit";
import { Nav } from "@nxcode-npm/cookjs/src/lib/Nav"

export class IndexPageTemplate {

    constructor(){}
    
    render(data:IndexPageData){
        return html`<h1>Index page</h1><msg-component .data=${ data }></msg-component>
        <button @click="${()=>Nav({name:'home', params:{}})}">Go Home</button>`
    }

}