import { SvelteComponentTyped } from "svelte";
import type IReceita from "../../../Interfaces/IReceita";
declare const __propDef: {
    props: {
        receita: IReceita;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ReceitaProps = typeof __propDef.props;
export type ReceitaEvents = typeof __propDef.events;
export type ReceitaSlots = typeof __propDef.slots;
export default class Receita extends SvelteComponentTyped<ReceitaProps, ReceitaEvents, ReceitaSlots> {
}
export {};
