async function fetchData(){
    try{
        let respond = await fetch('./data.json')
        if(!respond.ok){
            throw new Error('Error fetching data')
        }
        countries= await respond.json()
        countries.forEach(country => {
            renderCountry(country)
        });
    }catch (error){
        console.error('fetching data error:', error)
    }
}
let countries =[];
const container = document.querySelector('.container');
function renderCountry(country){
    let card = document.createElement('div');
    card.className='card';

    let cardHead = document.createElement('div')
    cardHead.className='cardHead';
    let img = document.createElement('img')
    img.src=country.flags.png
    let cardBody = document.createElement('div');
    cardBody.className='cardBody';

    let title = document.createElement('h3');
    title.className='title'
    title.innerText=country.name
    let pop = document.createElement('p')
    pop.className='pop'
    let population = document.createElement('span')
    population.className='population'
    population.innerHTML='Population:'
    let ptxt = document.createElement('span')
    ptxt.className="Ptxt"
    ptxt.innerText=` ${country.population}`

    let reg = document.createElement('p')
    pop.className='reg'
    let region = document.createElement('span')
    region.className='region'
    region.innerHTML='Region:'
    let rtxt = document.createElement('span')
    rtxt.className="Rtxt"
    rtxt.innerText=` ${country.region}`



    let cap = document.createElement('p')
    pop.className='cap'
    let capital = document.createElement('span')
    capital.className='capital'
    capital.innerHTML='Capital:'
    let ctxt = document.createElement('span')
    ctxt.className="ctxt"
    ctxt.innerText=` ${country.capital}`

 

    card.appendChild(cardHead).appendChild(img)
    card.appendChild(cardBody)
    cardBody.appendChild(title)
    cardBody.appendChild(pop).appendChild(population).appendChild(ptxt)
    cardBody.appendChild(reg).appendChild(region).appendChild(rtxt)
    cardBody.appendChild(cap).appendChild(capital).appendChild(ctxt)
   


    container.appendChild(card)

    card.addEventListener('click', () => {
        localStorage.setItem('selectedCountry', JSON.stringify(country));
        window.location.href = 'details.html'; // Ensure this path matches your actual details page path
    });
}
fetchData()
const mode =document.querySelector('.mode');
const main = document.querySelector('main')
mode.addEventListener('click',()=>{
    main.classList.toggle('dark')
    if(main.classList.contains('dark')){
        let icon =document.querySelector('.icon')
        let sDark =document.querySelector('.sDark')
        let down =document.querySelector('.down')
        down.src="images/icons8-chevron-down-24.png"
        icon.src="images/moon-symbol-50.png"
        sDark.src="images/search-30.png"
    } 
    if(!main.classList.contains('dark')){
        let icon =document.querySelector('.icon')
        let sDark =document.querySelector('.sDark')
        let down =document.querySelector('.down')
        down.src="images/icons8-angle-down-24.png"
        icon.src="images/icons8-moon-symbol-50.png"
        sDark.src="images/icons8-search-30.png"
    }

})
const present = document.querySelector('.present')
const list = document.querySelector('.list')
present.addEventListener('click',()=>{
    list.classList.toggle('active')
})
const filters = document.querySelectorAll('.filters');
filters.forEach(filter=>{
    filter.addEventListener('click',()=>{
        let keyword = [filter.innerText]
        list.classList.remove('active')
        applyFilter(keyword)
    })
})
function getCountry(countries,keyword){
    return countries.filter(country=>{
        const values = [country.region]
        return keyword.every(key=>values.includes(key))
    });
}
function applyFilter(keyword){
    container.innerHTML=''
    const filteredCountries = getCountry(countries,keyword);
    filteredCountries.forEach(filtered=>{
        renderCountry(filtered)
    })
}
const searchField = document.querySelector('.searchField');
searchField.addEventListener('keyup', () => {
    const keyword = [searchField.value.trim().toLowerCase()]; // Normalize the input for case-insensitivity
    applySearch(keyword);
});

function searchFilter(countries, keyword) {
    return countries.filter(country => {
        const values = [country.name.trim().toLowerCase()];
        // Check if any of the values include the keyword
        return values.some(value => value.includes(keyword));
    });
}
function applySearch(keyword) {
    container.innerHTML = ''; // Clear the container
    const filteredCountries = searchFilter(countries, keyword);
    filteredCountries.forEach(filtered => {
        renderCountry(filtered);
    });
}