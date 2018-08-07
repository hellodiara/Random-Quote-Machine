const newQuoteButton= document.querySelector('.new-quote');

newQuoteButton.addEventListener('click', getQuote);

const endPoint = 'https://talaikis.com/api/quotes/random/';

function getQuote() {
	fetch(endPoint)
	    .then(function (response) {
	      return response.json();
	    })
	    .then(function (data) {
	      console.log(data);
	    })
	    .catch(function () {
	      console.log("An error occurred");
	    });
}

