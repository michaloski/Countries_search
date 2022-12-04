const flagsContainer = document.querySelector('.flags-container-grid');
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');
const block = document.querySelector('.block');


searchBtn.addEventListener('click', function(){
    console.log('button dziala');
    const search = document.querySelector('.search');

    
    fetch(`https://restcountries.com/v3.1/name/${search.value}`)
    .then(res=>res.json())
    .then(data=>{
        const [newData] = data;
        console.log(newData);

        const html = `
            <div class="block">
                <div class="flag"><img class="flag-img" src="${newData.flags.png}" alt="zdjęcie_flagi"></div>
                <div class="opis">
                    <div class="name">${newData.name.common}</div>
                    <div class="population"><strong>Population: </strong>${newData.population}</div>
                    <div class="region"><strong>Region: </strong>${newData.region}</div>
                    <div class="capital"><strong>Capital: </strong>${newData.capital}</div>
                </div>
                <div class="learn-more">Learn More</div>
            </div>
            `;
            flagsContainer.insertAdjacentHTML('beforeend', html);
            search.value = '';
            flagsContainer.style.opacity = 1;
    })
})


