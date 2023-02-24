const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}


const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries');
   
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        
    countryDiv.classList.add('country');
    countryDiv.innerHTML =`
        <h2>Name: ${country.name.common}</h2>
        <h4>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h4>
        <button onclick="loadOneCountry('${country.cca2}')">Details</button>
    `;
    countriesContainer.appendChild(countryDiv)
    
    });
   
    

}



const loadOneCountry = (countryCode) => {
   
    const countryLink = `https://restcountries.com/v3.1/alpha/${countryCode}`;
   fetch(countryLink)
   .then(res => res.json())
   .then(data => showCountry(data[0]))

}

const showCountry = country => {
    const getOneCountry = document.getElementById('country-container');
   
    getOneCountry.innerHTML = `
    <h2>Name: ${country.name.common}</h2>
    <h4>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h4>
    <img src="${country.flags.png}">
    `;
}

loadCountries()