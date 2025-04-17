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
  const account = document.getElementById('account-number').value;
  const amount = getInputValueById('amount');
  const pin = getInputValueById('pin');
  const mainBalance = getInnerTextById('main-balance');
  // console.log(amount, pin, account, mainBalance, account.length);
  const selectedBank = document.getElementById('allBank').value;
  console.log(selectedBank);

  if (amount < 0) {
    alert('plz positive number');
    return;
  }
  if (account.length === 11) {
    if (pin === 1234) {
      const sum = mainBalance + amount;
      // document.getElementById('main-balance').innerText = sum;
      setInnerTextByIdandValue('main-balance', sum);

      const container = document.getElementById('transaction-container');
      // const p = document.createElement('p');
      // p.innerText = `
      // added ${amount} from ${account} account`;
      // container.appendChild(p);
      const div = document.createElement('div');
      div.classList.add('bg-red-400')
      div.innerHTML = `
      <h1 class="text-yellow-300">Added Money From ${selectedBank}</h1>
      <h3>${amount}</h3>
      <p>Account Number ${account}</p>
      `
      container.appendChild(div)
    } else {
      alert('Enter your pin');
    }
  } else {
    alert('Enter your account');
  }
});
