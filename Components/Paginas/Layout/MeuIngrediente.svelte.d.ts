import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ingrediente: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MeuIngredienteProps = typeof __propDef.props;
export type MeuIngredienteEvents = typeof __propDef.events;
export type MeuIngredienteSlots = typeof __propDef.slots;
export default class MeuIngrediente extends SvelteComponentTyped<MeuIngredienteProps, MeuIngredienteEvents, MeuIngredienteSlots> {
}
export {};
