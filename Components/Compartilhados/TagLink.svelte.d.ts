import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        href: string;
        desabilitada?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TagLinkProps = typeof __propDef.props;
export type TagLinkEvents = typeof __propDef.events;
export type TagLinkSlots = typeof __propDef.slots;
export default class TagLink extends SvelteComponentTyped<TagLinkProps, TagLinkEvents, TagLinkSlots> {
}
export {};
