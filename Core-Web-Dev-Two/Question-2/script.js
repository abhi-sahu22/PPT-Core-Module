const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('submitButton');
const output = document.getElementById('output');

function handleInput() {
  const text = textInput.value;
  if (text.trim() !== '') {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    output.appendChild(paragraph);
    textInput.value = '';
  }
}

submitButton.addEventListener('click', handleInput);

textInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    handleInput();
    event.preventDefault(); 
}});
