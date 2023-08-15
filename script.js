let c ;
document.getElementById('AC').onclick = function(){
    document.getElementById('text').value=''
}

document.getElementById('ans').onclick = function(){
    c = document.getElementById('text').value
    c = c.replaceAll('÷','/')
    c= c.replaceAll('×','*')
    document.getElementById('text').value = eval(c)
}

function validateNumericInput(input) {
    // Remove non-numeric characters using a regular expression
input.value = input.value.replace(/[^0-9+\-÷×*/]/g, '');
}

const allButton = document.getElementById('ALL');
allButton.onclick = function() {
  const text = document.getElementById('text');
  const value = text.value;

  if (value[0] === '-') {
    text.value = value.substring(1);
  } else {
    text.value = '-' + value;
  }
};

const perButton = document.getElementById('PER');
perButton.onclick = function() {
  const text = document.getElementById('text');
  const value = text.value;

  if (value === '') {
    alert('Please enter a number first.');
  } else {
    text.value = (value / 100).toFixed(2);
}}