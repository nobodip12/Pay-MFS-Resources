// cashout section hide
// document.getElementById('cashout').style.display = 'none';

// document.getElementById('add-money-box').addEventListener('click', function () {
//   document.getElementById('cashout').style.display = 'none';
//   document.getElementById('addmoney').style.display = 'block';
// });
// document.getElementById('cashout-box').addEventListener('click', function () {
//   document.getElementById('cashout').style.display = 'block';
//   document.getElementById('addmoney').style.display = 'none';
// });

document.getElementById('cashout').style.display = 'none';
document.getElementById('transection-history').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function () {
  handleToggle('cashout', 'none');
  handleToggle('addmoney', 'block');
  handleToggle('transection-history', 'none');
});
document.getElementById('cashout-box').addEventListener('click', function () {
  handleToggle('cashout','block')
  handleToggle('addmoney','none')
  handleToggle('transection-history', 'none');
});
document.getElementById('transection-box').addEventListener('click', function () {
  handleToggle('addmoney', 'none');
  handleToggle('cashout', 'none');
  handleToggle('transection-history', 'block');
  
});


