const loadData = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}


const displayQuote = quote => {
    const blockQuote = document.getElementById('quote');
    // blockQuote.innerText = quote.quote;
    blockQuote.innerHTML = quote.quote;
}




const loadQuotes= () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayBlockQuote(data))
}

const displayBlockQuote = quote => {
    const getBlockQuote = document.getElementById('blockquotes');
    getBlockQuote.innerHTML = quote.quote;

}