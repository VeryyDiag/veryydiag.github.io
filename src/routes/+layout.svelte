<script lang="ts">
  import './layout.css';
  import favicon from '#lib/assets/favicon.svg';
  import type { LayoutProps } from './$types';
  import VeryyDiag from '#lib/components/VeryyDiag.svelte';
  let { children }: LayoutProps = $props();

  import { stylePanel } from "#lib/styles.ts"
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>VeryyDiag</title>
  <meta
    name="description"
    content="VeryyDiag is a web app to create and manipulate graphs with custom nodes and rewriting rules, inspired by the ZX-calculus."
  />
</svelte:head>

<div class="min-h-screen bg-linear-65 from-blue-50 to-pink-100">
  <!-- <div class="flex justify-center p-2 align-items">
       <div class={['rounded-t-xl p-4 flex flex-row flex-nowrap', stylePanel]}>
       <div>
       <a href="https://veryydiag.github.io/veryydiag/" class="rounded-lg p-2 transition active:scale-95">
       <VeryyDiag/>
       </a>
       </div>
       </div>
       </div> -->

  <div class="m-2 mx-auto container p-4">
    {@render children()}
  </div>
</div>
