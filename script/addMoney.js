// document.getElementById('add-money').addEventListener('click', function (event) {
//   event.preventDefault();
//   const accountNumber = document.getElementById('account-number').value;
//   const amount = document.getElementById('amount').value;
//   const convertedAmount = parseFloat(amount);
//   const pin = document.getElementById('pin').value;
//   const convertedPin = parseInt(pin);
//   const mainBalance = document.getElementById('main-balance').innerText;
//   const convertedMainBalance = parseFloat(mainBalance);
//   if (accountNumber.length === 11) {
//     if (convertedPin === 1234) {
//       const sum = convertedMainBalance + convertedAmount;
//       // const mainBalance = (document.getElementById('main-balance').innerText = sum);
//       document.getElementById('main-balance').innerText = sum;
//     } else {
//       alert('Enter your pin');
//     }
//   } else {
//     alert('Enter your account');
//   }
// });

//  utilities diya

document.getElementById('add-money').addEventListener('click', function (event) {
  event.preventDefault();
  const amount = getInputValueById('amount');
  const pin = getInputValueById('pin');
  const account = getInputValueById('account-number').toString();
  const mainBalance = getInnerTextById('main-balance');
  // console.log(amount, pin, account, mainBalance, account.length);
  if (account.length === 11) {
    if (pin === 1234) {
      const sum = mainBalance + amount;
      // document.getElementById('main-balance').innerText = sum;
      setInnerTextByIdandValue('main-balance', sum);
    } else {
      alert('Enter your pin');
    }
  } else {
    alert('Enter your account');
  }
});
