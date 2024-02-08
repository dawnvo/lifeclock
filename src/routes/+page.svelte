<script>
  import {
    formatTime,
    validateBirthYear,
    calculateLifeClock,
  } from '$lib/utils';

  let lifeExpectancy;
  let birthYear;

  let errorMessage;
  let result;

  // * 출생연도가 현재연도를 넘지 않도록 합니다.
  const currentYear = new Date().getFullYear();
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

<div class="card size-full justify-center gap-2">
  <h1>인생 시계</h1>

  <label>
    <span class="label-text">기대수명:</span>
    <select class="select select-sm" bind:value={lifeExpectancy}>
      <option value="100" selected>100세</option>
      <option value="80">80세</option>
    </select>
  </label>

  <label class="form-control w-full">
    <input
      type="number"
      placeholder="출생연도 입력"
      class="input input-bordered w-full"
      bind:value={birthYear}
    />
    {#if errorMessage}
      <div class="label">
        <span class="label-text-alt text-error">{errorMessage}</span>
      </div>
    {/if}
  </label>

  <button
    type="submit"
    class=" btn btn-primary my-4 w-full shadow shadow-primary/20"
    on:click={handleCalculate}
  >
    계산하기
  </button>

  {#if result}
    <h2>{result}</h2>
  {/if}
</div>
