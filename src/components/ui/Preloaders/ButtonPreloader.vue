<template>
    <div class="flex justify-center flex-grow">
        <div class="loader simple-circle"></div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  :root{
      --loader-width: 20px;
      --loader-height: 20px;
      --loader-color-primary: transparent;
      --loader-color-secondary: rgb(248, 239, 239);
      --line-width: 2px;
      --animation-duration: 1s;
      --loader-initial-scale: 0.1;
  }
  /*
  The loaders use CSS custom properties (variables) to control the attributes of the loaders
  */
  .loader,.loader:before,.loader:after{
      box-sizing: border-box;
      flex-grow: 0;
      flex-shrink: 0;
  }
  /*
  In order to get optimal results, please only change the 
  variables above and don't change anything in the actual loader code
  */
          
  @keyframes circle-loader {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
  }
  
  .loader.simple-circle {
      transform-origin: center center;
      border: var(--line-width, 4px) solid var(--loader-color-secondary, #fff);
      border-right-color: var(--loader-color-primary, #00f);
      width: var(--loader-width, 100px);
      height: var(--loader-height, 100px);
      border-radius: 50%;
      animation: circle-loader var(--animation-duration, 1s) infinite ease-out;
  }
  </style>