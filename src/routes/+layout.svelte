<script>
  import '../app.pcss'
  import 'tailwindcss/tailwind.css';
</script>

<svelte:head>
  <title>인생시계</title>
  <meta name="description" content="당신은 지금 몇 시인가요?" />
</svelte:head>

<main class="prose">
  <div class="absolute inset-0 m-auto size-full min-h-[40rem] max-w-md">
    <slot />
  </div>
</main>
