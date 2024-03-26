import { CustomElement } from "@nxcode-npm/cookjs/src/components/CustomElement";
import { IndexPageTemplate } from "./index-page.template";
import { TemplateResult, html } from "lit";

export interface IndexPageData {
    msg:string
}

export class IndexPage extends CustomElement {
    
    data:IndexPageData | {}
    template:IndexPageTemplate

    constructor(){
        super()
        this.data = {msg:'Buongiorno cookJS'}
        this.template = new IndexPageTemplate()
    }

    render():TemplateResult {
        return html`${this.template.render(<IndexPageData>this.data)}`
    }


    
}