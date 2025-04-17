// document.getElementById('cashout-btn').addEventListener('click', function (event) {
//   event.preventDefault;
//   const accountNumber = document.getElementById('agent-number').value;
//   const pin = document.getElementById('cashout-pin').value;
//   const convertedPin = parseInt(pin);
//   const amount = document.getElementById('cashout-amount').value;
//   const convertedAmount = parseFloat(amount);
//   const mainBalance = document.getElementById('main-balance').innerText;
//   const convertedMainBalance = parseFloat(mainBalance);
//   if (accountNumber.length === 11) {
//     if (convertedPin === 1234) {
//       const sum = convertedMainBalance - convertedAmount;
//       document.getElementById('main-balance').innerText = sum;
//     } else {
//       alert('Enter your valid pin');
//     }
//   }
//   else{
//     alert('Enter your account')
//   }
// });

document.getElementById('cashout-btn').addEventListener('click', function (event) {
  event.preventDefault;
  const accountNumber = document.getElementById('agent-number').value;
  const amount = getInputValueById('cashout-amount');
  const pin = getInputValueById('cashout-pin');
  const mainBalance = getInnerTextById('main-balance');

  if (amount > mainBalance) {
    alert('invalid amount');
    return;
  }
  if (accountNumber.length === 11) {
    if (pin === 1234) {
      const sum = mainBalance - amount;
      setInnerTextByIdandValue('main-balance', sum);

      const container = document.getElementById('transaction-container');
      const p = document.createElement('p');
      p.innerText = `
      cashout ${amount} from this ${accountNumber} account`;
      container.appendChild(p);
    } else {
      alert('Enter your valid pin');
    }
  } else {
    alert('Enter your account');
  }
});
