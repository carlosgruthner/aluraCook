import { writable } from "svelte/store";
const { subscribe, set, update } = writable([]);
export const minhaLista = {
    subscribe,
    set,
    adicionarIngrediente(ingrediente) {
        update((valorAtual) => [...valorAtual, ingrediente]);
    },
    removerIngrediente(ingrediente) {
        update((valorAtual) => valorAtual.filter((item) => item !== ingrediente));
    }
};
