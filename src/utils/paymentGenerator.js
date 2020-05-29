/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

const generatePayment = data => {
  // Create form
  const form = document.createElement('form');
  form.setAttribute('action', data.action);
  form.setAttribute('method', 'post');
  form.style.display = 'none';
  delete data.action;

  // Create submit button
  const sendInput = document.createElement('input');
  sendInput.type = 'submit';
  form.appendChild(sendInput);

  const fragment = new DocumentFragment();

  for (const val in data) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.setAttribute('name', val);
    input.setAttribute('value', data[val]);
    fragment.appendChild(input);
  }

  form.appendChild(fragment);
  document.body.appendChild(form);
  form.submit();
};

const paymentGenerator = data => {
  generatePayment(data);
};

export default paymentGenerator;
