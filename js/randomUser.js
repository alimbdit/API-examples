const loadGender = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayGender(data))
}

const displayGender = data => {
    const name = document.getElementById('name');
    name.innerText = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.first;

    const gender = document.getElementById('gender');
    gender.innerHTML = data.results[0].gender;

    const location = document.getElementById('location');
    const loc =data.results[0].location;

    location.innerHTML= `Street: ${loc.street.number},  ${loc.street.name},  City: ${loc.city},  State: ${loc.state},  Country: ${loc.country}`;

    const images = document.getElementById('image');

    images.innerHTML = `
        <img src = "${data.results[0].picture.large}" >
        <img src = "${data.results[0].picture.medium}" >
        <img src = "${data.results[0].picture.thumbnail}" >
    `;
}

loadGender()