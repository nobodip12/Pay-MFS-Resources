// step-1: Id k dhorchi getElementById diya
document.getElementById('login-btn').addEventListener('click', function (event) {
  event.preventDefault();
  // console.log('hellow')
  const accountNumber = document.getElementById('account-number').value;
  const pin = document.getElementById('pin').value;
  const convertedPin = parseInt(pin);
  // console.log(accountNumber,pin);
  if (accountNumber.length === 11) {
    if (convertedPin === 1234) {
      window.location.href = './addMoney.html';
    } else {
      alert('pin tik nai');
    }
  } else {
    alert('need valid account number');
  }
});
