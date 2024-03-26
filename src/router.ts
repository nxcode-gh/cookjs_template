import { IRouter } from "@nxcode-npm/cookjs/src/lib/Router";

export const appRouter:IRouter = {
    'index': {
        customElement: 'index-page',
        params:{},
        state:{}
    },
    'home': {
        customElement: 'home-page',
        params:{},
        state:{}
    }
}