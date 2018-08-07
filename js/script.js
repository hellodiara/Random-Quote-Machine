const newQuoteButton= document.querySelector('.new-quote');

newQuoteButton.addEventListener('click', getQuote);

const endPoint = 'https://talaikis.com/api/quotes/random/';

// Retrieves quote from API
function getQuote() {
	fetch(endPoint)
	    .then(function (response) {
	      return response.json();
	    })
	    .then(function (quote) {
	      displayQuote(quote);
	    })
	    .catch(function () {
	      console.log("An error occurred");
	    });
}

// Displays the quote on the page
function displayQuote(quote) {
	const quoteText = document.querySelector('.quote-text');
	quoteText.textContent =quote;
}
