
// const axios = require('axios');

const postMessage = async (message) => {
  const response = await fetch('http://localhost:3000/json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
  return response.json();
}


// postMessage({'message': 'whats up'})
// .then((response) => {
//   console.log(response);
// })
// .catch((err) => {
//   console.log(err);
// });
//  get textarea value/text from dom

document.querySelector('#submitJSON').addEventListener('click', (event) => {
  let messageInput = document.querySelector('#JSONArea').value;
  let outputBox = document.querySelector('#output');
  messageInput = `[${messageInput}]`;
  outputBox.HTML = '';
  try {
    postMessage(JSON.parse(messageInput))
      .then((response) => {
        console.log('response from server', response);
        outputBox.innerText = response;
      })
      .catch((error) => {
        console.error(error);
        outputBox.innerText = 'incorrect format';
      })
  }
  catch (error) {
    outputBox.innerText = 'incorrect format';

  }
})

document.querySelector('#testJSON').addEventListener('click', (event) => {
  let messageInput = document.querySelector('#JSONArea');
  const exampleData = new Example();
  messageInput.value = exampleData.data;
  messageInput.innerText = exampleData.data;
  messageInput.dispatchEvent(new Event('focus')) // the JSON label not moving really bothered me
})