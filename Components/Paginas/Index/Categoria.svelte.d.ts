import { SvelteComponentTyped } from "svelte";
import type ICategoria from "../../../Interfaces/ICategoria";
declare const __propDef: {
    props: {
        categoria: ICategoria;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CategoriaProps = typeof __propDef.props;
export type CategoriaEvents = typeof __propDef.events;
export type CategoriaSlots = typeof __propDef.slots;
export default class Categoria extends SvelteComponentTyped<CategoriaProps, CategoriaEvents, CategoriaSlots> {
}
export {};
