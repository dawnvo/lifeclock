<script>
  import DayNight from '$lib/components/day-night.svelte';
  import {
    formatTime,
    validateBirthYear,
    calculateLifeClock,
  } from '$lib/utils';

  let errorMessage;
  let result;

  let lifeExpectancy;
  let birthYear;

  const currentYear = new Date().getFullYear();

  // * 출생연도가 현재연도를 넘지 않도록 합니다.
  $: if (birthYear > currentYear) birthYear = currentYear;

  const handleCalculate = () => {
    const err = validateBirthYear(lifeExpectancy, birthYear);
    if (err) {
      errorMessage = err;
      return;
    } else {
      errorMessage = '';
    }

    const { hours, minutes } = calculateLifeClock(lifeExpectancy, birthYear);
    result = formatTime(hours, minutes);
  };
</script>

<main class="hero min-h-screen">
  <div class="hero-content w-full max-w-sm flex-col text-center">
    <figure class="size-full">
      <DayNight />
      <figcaption class="sr-only">day-night animation</figcaption>
    </figure>

    <h1 class="font-medium">
      당신의 삶이 24시간이라면
      <br />
      얼마나 많은 시간이 남았을까요?
    </h1>

    <form class="flex w-full flex-col">
      <label class="p-2">
        <span class="label-text">기대수명:</span>
        <select class="select select-sm" bind:value={lifeExpectancy}>
          <option value="100" selected>100세</option>
          <option value="80">80세</option>
        </select>
      </label>

      <input
        type="number"
        min="0"
        max={currentYear}
        placeholder="출생연도 입력"
        class="input input-bordered w-full"
        bind:value={birthYear}
      />
      {#if errorMessage}
        <small class="label label-text-alt text-error">{errorMessage}</small>
      {/if}

      <button
        type="submit"
        class="btn btn-primary my-4 w-full shadow shadow-primary/20"
        on:click={handleCalculate}
      >
        계산하기
      </button>
    </form>

    {#if result}
      <h2 class="text-xl font-bold">{result}</h2>
    {/if}
  </div>
</main>
