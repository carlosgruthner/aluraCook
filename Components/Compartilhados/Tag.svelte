<script>export let ativa = false;
export let tamanho = "md";
export let desabilitada = false;
</script>

<div class="tag {tamanho}" 
  class:ativa={ativa}
  class:desabilitada
    >
  <slot></slot>
</div>

<style>
  .tag {
    height: 48px;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    color: var(--cor-texto-principal);
    background-color: var(--cinza);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.2s;
  }

  .ativa {
    color: var(--branco);
    background-color: var(--laranja);
  }

  .lg{
    font-size: 1.125rem;
    padding: 1rem 1.5rem;
  }

  .desabilitada{
    opacity: 0.5;
    cursor: default;
  }
</style>
