export function set_userAgent(newValue: 'IE11' | 'Chrome' | 'Firefox') {
  let agent;

  switch (newValue) {
    case 'IE11':
      agent =
        'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko';
      break;
    case 'Chrome':
      agent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)';
      break;
    case 'Firefox':
      agent =
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0';
      break;
  }
  // eslint-disable-next-line
  Object.defineProperty(window.navigator, 'userAgent', {
    value: agent,
  });
}
