import { CustomElement } from "@nxcode-npm/cookjs/src/components/CustomElement";
import { MessageTemplate } from "./msg.template";

export interface MessageData {
    msg:string
}


export class MessageComponent extends CustomElement {

    data:MessageData | {}
    template:MessageTemplate

    constructor(){
        super()
        this.data = {}
        this.template = new MessageTemplate()
    }

    render(){
        return this.template.render(<MessageData>this.data)
    }

}