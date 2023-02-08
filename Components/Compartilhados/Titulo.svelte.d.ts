import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TituloProps = typeof __propDef.props;
export type TituloEvents = typeof __propDef.events;
export type TituloSlots = typeof __propDef.slots;
export default class Titulo extends SvelteComponentTyped<TituloProps, TituloEvents, TituloSlots> {
}
export {};
