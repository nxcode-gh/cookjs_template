import { MessageData } from "./msg.component";
import { html, TemplateResult } from "lit";

export class MessageTemplate {

    constructor(){}

    render(data:MessageData):TemplateResult{
        return html`<p>${data.msg}</p>`
    }
}