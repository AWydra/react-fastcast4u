const init = () => {
  const script = document.createElement('script');
  script.src =
    'https://www.google.com/recaptcha/api.js?render=6LdUKPkUAAAAALnMyAe1VofPN4pvLo30wGKpl_dA';
  document.body.appendChild(script);
};

const generate = async () => {
  const token = await window.grecaptcha.execute('6LdUKPkUAAAAALnMyAe1VofPN4pvLo30wGKpl_dA');
  return token;
};

export default { init, generate };
