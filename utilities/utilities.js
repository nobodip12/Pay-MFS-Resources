function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}
// input value function
function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}
//text value  set function
function setInnerTextByIdandValue(id,value){
  document.getElementById(id).innerText = value;
}
// toggle status function
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}