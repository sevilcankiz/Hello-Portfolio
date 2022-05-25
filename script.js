alert('I solemnly swear that i am up to no good');

function clickListener() { 
	event.preventDefault();
  console.log('Button clicked'); 
} 

function clickListener(event) { 
  event.preventDefault();
  
  let emailInput = document.querySelector('#email'); 
  let messageInput = document.querySelector('#message');

  let emailText = emailInput.value; 
  let messageText = messageInput.value;

	if(emailValidate(emailText) !== true) {
	  console.log('The email address must contain @'); 
	  return false;
	} 
	console.log('Thanks for your message');
}

let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', clickListener);


