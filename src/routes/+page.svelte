<script lang="ts">
  import VeryyDiag from '#lib/components/VeryyDiag.svelte';
  const stylePanel =
    'bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 transition-all duration-300';

  const styleButton =
    'p-2 rounded-lg transition active:scale-95';

  const styleButtonEnabled =
    'bg-blue-50 hover:bg-blue-100 text-blue-600';
</script>

<div class="min-h-screen px-6 py-16">
  <main class="mx-auto max-w-5xl">

    <!-- Introduction -->
    <section class="mb-12 text-center">
      <h1 class="text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl">
        <VeryyDiag/>: your diagram,
        <span class="bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">your rules</span>
      </h1>

      <p class="mx-auto my-20 max-w-2xl text-base leading-7 text-gray-600">
        <VeryyDiag/> (aka VeryyDiag) is an open source web app that can create and manipulate graphs with custom nodes and rewriting rules, inspired by the ZX-calculus.
      </p>
    </section>

    <!-- Links -->
    <section class="grid gap-6 sm:grid-cols-3">

      <!-- Application -->
      <a
        href="https://veryydiag.github.io/veryydiag/"
        class={`${stylePanel} group p-6 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl`}
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-lg font-normal text-gray-900">
              Try the <VeryyDiag/> app
            </h2>

            <p class="mt-4 text-sm leading-6 text-gray-600">
              Open the application to start to play right away!
            </p>
          </div>

          <span
            class={`${styleButton} bg-linear-65 from-blue-50 to-pink-100 group-hover:from-blue-100 group-hover:to-pink-100 shrink-0`}
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </a>

      <!-- Documentation -->
      <a
        href="https://veryydiag.github.io/veryydiag/documentation"
        class={`${stylePanel} group p-6 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl`}
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-lg font-normal text-gray-900">
              Documentation
            </h2>

            <p class="mt-2 text-sm leading-6 text-gray-600">
              Browse the documentation, guides, and API reference.
            </p>
          </div>

          <span
            class={`${styleButton} bg-linear-65 from-blue-50 to-pink-100 group-hover:from-blue-100 group-hover:to-pink-100 shrink-0`}
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </a>

      <!-- Github -->
      <a
        href="https://github.com/VeryyDiag/veryydiag"
        class={`${stylePanel} group p-6 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl`}
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-lg font-normal text-gray-900">
              GitHub
            </h2>

            <p class="mt-2 text-sm leading-6 text-gray-600">
              Browse the source code. To review the code, contribute or run locally.
            </p>
          </div>

          <span
            class={`${styleButton} bg-linear-65 from-blue-50 to-pink-100 group-hover:from-blue-100 group-hover:to-pink-100 shrink-0`}
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </a>

    </section>

    <div
      role="alert"
      class="mx-auto my-20 flex max-w-2xl items-start gap-3 rounded-2xl border border-pink-300/60
            bg-linear-65 to-red-50 from-pink-200 p-4 text-left shadow-sm shadow-amber-200/40 backdrop-blur-sm"
    >
      <svg class="mt-1.5 size-10 shrink-0 text-pink-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 6Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      </svg>

      <div class="text-sm leading-relaxed">
        <span class="font-medium tracking-tight bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent text-xl inline-block py-2">Warning</span>
        <p class="text-amber-800/90">
          This project is very much a work in progress. Expect bugs, missing features, backward-incompatible changes, missing documentation and more! Feel free to report bugs or feature requests in the <a class="text-pink-800" href="https://github.com/VeryyDiag/veryydiag/issues">GitHub issue tracker</a>, and give us a star if you like it!
        </p>
      </div>
    </div>

    
    <!-- Small footer -->
    <hr class="my-20 h-px border-0 bg-black/10" />

    <p class="text-center text-sm text-gray-500">
      🄯 Léo Colisson Palais
    </p>

  </main>
</div>
