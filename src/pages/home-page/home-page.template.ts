import { HomePageData } from "./home-page.component";
import { html } from "lit";
import { Nav } from "@nxcode-npm/cookjs/src/lib/Nav"

export class HomePageTemplate {

    constructor(){}
    
    render(data:HomePageData){
        return html`<h1>Home page</h1>
            <div class="main">
                <button @click="${()=>Nav({name:'index', params:{}})}">Go Back</button>
            </div>`
    }

}