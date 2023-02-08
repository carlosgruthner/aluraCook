<script>import { minhaLista } from "../../../stores/minhaLista";
import Tag from "../../Compartilhados/Tag.svelte";
export let ingrediente;
$:
  selecionado = $minhaLista.includes(ingrediente);
function aoClicar() {
  if (!selecionado) {
    minhaLista.adicionarIngrediente(ingrediente);
  } else {
    minhaLista.removerIngrediente(ingrediente);
  }
}
</script>

<button on:click={aoClicar}>
    <Tag ativa={selecionado}>{ingrediente}</Tag>

</button>

<style>

    button {
        cursor: pointer;
    }
</style>