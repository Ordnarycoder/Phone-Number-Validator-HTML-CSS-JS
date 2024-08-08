
function validatePhoneNumber() {
  const userInput = document.getElementById('user-input').value.trim();
  const resultsDiv = document.getElementById('results-div');

 
  const phoneNumberRegex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?([0-9]{3})[\s\-]?([0-9]{4})$/;

  if (!userInput) {
    alert('Please provide a phone number');
  } else if (phoneNumberRegex.test(userInput)) {
    resultsDiv.textContent = `Valid US number: ${userInput}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${userInput}`;
  }
}


function clearResults() {
  document.getElementById('results-div').textContent = '';
}


document.getElementById('check-btn').addEventListener('click', validatePhoneNumber);
document.getElementById('clear-btn').addEventListener('click', clearResults);
