<script lang="ts">
  let y: number;
</script>

<svelte:window bind:scrollY={y} />

<span>{y ?? 0}</span>
