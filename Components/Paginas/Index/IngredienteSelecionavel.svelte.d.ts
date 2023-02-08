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
export type IngredienteSelecionavelProps = typeof __propDef.props;
export type IngredienteSelecionavelEvents = typeof __propDef.events;
export type IngredienteSelecionavelSlots = typeof __propDef.slots;
export default class IngredienteSelecionavel extends SvelteComponentTyped<IngredienteSelecionavelProps, IngredienteSelecionavelEvents, IngredienteSelecionavelSlots> {
}
export {};
