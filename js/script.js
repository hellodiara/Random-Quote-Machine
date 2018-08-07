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
	const authorText = document.querySelector('.author-text');
	const quoteText = document.querySelector('.quote-text');
	quoteText.textContent = quote.quote;
	authorText.textContent = quote.author;

	const tweetButton = document.querySelector('.tweet');
	tweetButton.setAttribute('href', "https://twitter.com/intent/tweet?text=" + quote.quote + " By " + quote.author);


}

const newQuoteButton= document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote();

//  + quote.quote + " By " + quote.author