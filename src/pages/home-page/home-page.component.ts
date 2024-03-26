import { CustomElement } from "@nxcode-npm/cookjs/src/components/CustomElement";
import { HomePageTemplate } from "./home-page.template";
import { TemplateResult, html } from "lit";

export interface HomePageData {}

export class HomePage extends CustomElement {
    
    data:HomePageData | {}
    template:HomePageTemplate

    constructor(){
        super()
        this.data = {}
        this.template = new HomePageTemplate()
    }

    render():TemplateResult {
        return html`${this.template.render(<HomePageData>this.data)}`
    }


    
}