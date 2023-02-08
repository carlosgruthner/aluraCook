import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MinhaListaProps = typeof __propDef.props;
export type MinhaListaEvents = typeof __propDef.events;
export type MinhaListaSlots = typeof __propDef.slots;
export default class MinhaLista extends SvelteComponentTyped<MinhaListaProps, MinhaListaEvents, MinhaListaSlots> {
}
export {};
