<script>import { fade } from "svelte/transition";
import Tag from "../../Compartilhados/Tag.svelte";
import { minhaLista } from "../../../stores/minhaLista";
export let ingrediente;
function removerIngrediente() {
  minhaLista.removerIngrediente(ingrediente);
}
</script>


<div class="meu-ingrediente-container"
    transition:fade={{ duration: 200}}
>
    <Tag ativa={true}>
        <button class="close" on:click={removerIngrediente}></button>
        {ingrediente}
    </Tag>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="remover" on:click={removerIngrediente}>
        Remover
    </span>
</div>

<style>
        .meu-ingrediente-container {
        position: relative;
    }

    .close {
        background-image: url("/icones/close.svg");
        height: 10px;
        width: 10px;
        cursor: pointer;

        position: absolute;
        top: 4px;
        right: 4px;
    }

    .remover {
        line-height: 24px;
        font-size: 0.875rem;
        color: var(--laranja);
        cursor: pointer;
    }
</style>