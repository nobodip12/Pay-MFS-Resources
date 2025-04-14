
document.getElementById('add-money').addEventListener('click', function (event) {
  event.preventDefault();
  const amount = document.getElementById('amount').value;
  const convertedAmount = parseFloat(amount);
  const pin = document.getElementById('pin').value;
  const convertedPin = parseInt(pin);
  const mainBalance = document.getElementById('main-balance').innerText;
  const convertedMainBalance = parseFloat(mainBalance);
  if (amount && pin) {
    if (convertedPin === 1234) {
      const sum = convertedMainBalance + convertedAmount;
      // const mainBalance = (document.getElementById('main-balance').innerText = sum);
      document.getElementById(mainBalance).innerText = sum;
    } else {
      alert('Enter your pin');
    }
  } else {
    alert('Enter your Amount');
  }
});
