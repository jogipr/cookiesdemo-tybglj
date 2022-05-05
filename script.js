function showCookieValue() {
  const output = document.getElementById('cookie-value');
  output.textContent = document.cookie;
}

function clearOutputCookieValue() {
  const output = document.getElementById('cookie-value');
  output.textContent = '';
}

function updateCookieValue() {
  const cookieValue = document.querySelector('#dataToShare').value;
  const updatedCookies = `test2=${cookieValue}; SameSite=None; Secure`;
  document.cookie = updatedCookies;
  console.log(updatedCookies);
}
