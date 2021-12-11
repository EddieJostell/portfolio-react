// eslint-disable-next-line
export const edgeCheck: boolean = /Edge/.test(navigator.userAgent);

// eslint-disable-next-line
let ua = window.navigator.userAgent;
let msie = ua.indexOf('MSIE ');

// eslint-disable-next-line
export const ieCheck: boolean = msie > 0 || !!ua.match(/Trident.*rv\:11\./);

// eslint-disable-next-line
export const safariCheck: boolean = /^((?!chrome|android).)*safari/i.test(
  navigator.userAgent
);

// eslint-disable-next-line
export const firefoxCheck: boolean = /firefox/i.test(navigator.userAgent);

// eslint-disable-next-line
export const chromeCheck: boolean =
  /chrome/i.test(navigator.userAgent) && !edgeCheck;

export const isMobileMax: boolean = window.innerWidth > 767;
export const isComputerMin: boolean = window.innerWidth > 992;
