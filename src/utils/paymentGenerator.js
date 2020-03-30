/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { isDev } from './nodeEnv';

const byPayPal = data => {
  // Create form
  const form = document.createElement('form');
  form.setAttribute('action', 'https://www.paypal.com/cgi-bin/webscr');
  form.setAttribute('method', 'post');
  form.setAttribute('name', 'paymentfrm');
  form.style.display = 'none';

  // Create submit button
  const sendInput = document.createElement('input');
  sendInput.type = 'submit';
  form.appendChild(sendInput);

  const cycle = () => {
    const cycle = data.billingcycle === 'monthly' || data.billingcycle === 'annually' ? 1 : 2;
    const unit = data.billingcycle === 'monthly' ? 'M' : 'Y';

    return {
      cycle,
      unit,
    };
  };

  const domain = isDev() ? 'localhost:3000' : 'react.awydra.pl';

  const json = {
    cmd: '_xclick-subscriptions',
    business: 'invoice@fastcast4u.com',
    item_name: `FastCast4u - Invoice #${data.invoice_id}`,
    no_shipping: '1',
    address_override: '0',
    email: data.email,
    no_note: '1',
    currency_code: data.currency,
    country: data.country,
    bn: 'WHMCS_ST',
    a3: data.invoice.total,
    p3: cycle().cycle,
    t3: cycle().unit,
    src: '1',
    sra: '1',
    charset: 'utf-8',
    custom: data.tblhosting_id,
    return: `http://${domain}/order/details`,
    cancel_return: `http://${domain}/order/?canceled`,
    notify_url: 'https://billing.fastcast4u.com/modules/gateways/callback/paypal.php',
    rm: '2',
  };

  const fragment = new DocumentFragment();

  for (const val in json) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.setAttribute('name', val);
    input.setAttribute('value', json[val]);
    fragment.appendChild(input);
  }

  form.appendChild(fragment);
  document.body.appendChild(form);
  form.submit();
};

const paymentGenerator = (method, data) => {
  switch (method) {
    case 'paypal':
      return byPayPal(data);
    case 'fasterpay':
      return console.log('fasterpay', data);
    default:
      return null;
  }
};

export default paymentGenerator;
