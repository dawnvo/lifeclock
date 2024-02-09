<figure class="container mask mask-squircle">
  <div class="stars" />
  <div class="spinner">
    <div class="shape sun" />
    <div class="shape moon" />
  </div>
  <div class="clouds" />
</figure>

<style>
  .container {
    pointer-events: none;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 20rem;
    background-image: linear-gradient(
      #14045f,
      #331a99,
      #282bce,
      #1555ec,
      #1e84f7
    );
    animation: colors 8s infinite;
  }
  @keyframes colors {
    0%,
    25%,
    100% {
      background-image: linear-gradient(
        #7f0063,
        #af397b,
        #df657a,
        #fb897e,
        #ffae6f
      );
    }
    50%,
    75% {
      background-image: linear-gradient(
        #14045f,
        #331a99,
        #282bce,
        #1555ec,
        #1e84f7
      );
    }
  }
  .spinner {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0);

    width: 30em;
    height: 30em;
    animation: spin 8s infinite;
  }
  @keyframes spin {
    0%,
    25% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    50%,
    75% {
      transform: translate(-50%, -50%) rotate(180deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .shape {
    position: absolute;
    width: 5em;
    height: 5em;
    border-radius: 50%;
  }
  .shape:nth-child(2) {
    transform: rotate(0deg);
    top: 26.5em;
    left: 11em;
  }
  .shape:nth-child(1) {
    transform: rotate(-90deg);
    top: 0em;
    left: 12.5em;
  }
  .shape:nth-child(n):before,
  .shape:nth-child(n):after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.08);
  }
  .shape:nth-child(1):before {
    top: -1.5em;
    left: -1.5em;
    width: 8em;
    height: 8em;
  }
  .shape:nth-child(1):after {
    top: -3.5em;
    left: -3.5em;
    width: 12em;
    height: 12em;
  }
  .shape:nth-child(2):before {
    top: -3em;
    left: 0em;
    width: 8em;
    height: 8em;
  }
  .shape:nth-child(2):after {
    top: -5em;
    left: -2em;
    width: 12em;
    height: 12em;
  }

  .sun {
    background-color: #f7f7de;
  }
  .clouds {
    position: absolute;
    bottom: -60%;
    width: 20em;
    height: 20em;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);

    animation: fluffy 8s infinite;
  }
  .clouds:before {
    content: '';
    position: absolute;
    top: 0em;
    left: -8em;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: inherit;
  }
  @keyframes fluffy {
    0%,
    25%,
    100% {
      opacity: 0.6;
    }
    50%,
    75% {
      opacity: 0;
    }
  }

  .moon {
    box-shadow: 1.5em -1.5em 0 0 #f7f7de;
  }
  .stars {
    position: absolute;
    top: 20%;
    left: 50%;
    width: 0.2em;
    height: 0.2em;
    border-radius: 50%;
    background-color: white;
    box-shadow:
      3em 6em white,
      -2em 6em white,
      2em 12em white,
      -4em 4em white,
      -6em -2em white,
      -8em 10em white,
      -6em 4em 0 0.1em white;

    animation: twinkle 8s infinite;
  }
  @keyframes twinkle {
    0%,
    25%,
    100% {
      opacity: 0;
    }
    50%,
    75% {
      opacity: 0.6;
    }
  }
</style>
