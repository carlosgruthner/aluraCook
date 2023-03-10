import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ativa?: boolean | undefined;
        tamanho?: "md" | "lg" | undefined;
        desabilitada?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TagProps = typeof __propDef.props;
export type TagEvents = typeof __propDef.events;
export type TagSlots = typeof __propDef.slots;
export default class Tag extends SvelteComponentTyped<TagProps, TagEvents, TagSlots> {
}
export {};
