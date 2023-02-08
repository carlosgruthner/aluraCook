export declare const minhaLista: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<string[]>, invalidate?: ((value?: string[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    set: (this: void, value: string[]) => void;
    adicionarIngrediente(ingrediente: string): void;
    removerIngrediente(ingrediente: string): void;
};
