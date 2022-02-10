import React from 'react';

const Spinner = () => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" r="0" fill="none" stroke="#009743" stroke-width="3">
      <animate attributeName="r" repeatCount="indefinite" dur="1.25s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="1.25s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"></animate>
    </circle><circle cx="50" cy="50" r="0" fill="none" stroke="#ffcb08" stroke-width="3">
      <animate attributeName="r" repeatCount="indefinite" dur="1.25s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.625s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="1.25s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.625s"></animate>
    </circle>
  </svg>
  );
};

export default Spinner;