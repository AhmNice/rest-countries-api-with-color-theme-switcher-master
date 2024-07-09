const container = document.querySelector('.Dcontainer')
const mode =document.querySelector('.mode');
const main = document.querySelector('main')
mode.addEventListener('click',()=>{
    main.classList.toggle('dark')
    if(main.classList.contains('dark')){
        let icon =document.querySelector('.moon')
        let backIcon = document.querySelector('.backIcon')
        backIcon.src='images/icons8-left-24 (1).png'
        icon.src="images/moon-symbol-50.png"
    } 
    if(!main.classList.contains('dark')){
        let icon =document.querySelector('.moon')
        icon.src="images/icons8-moon-symbol-50.png"
         let backIcon = document.querySelector('.backIcon')
        backIcon.src='images/icons8-left-24.png'
    }
});
const nntxt =document.querySelector('.nntxt')
const ptxt =document.querySelector('.ptxt')
const rtxt = document.querySelector('.rtxt')
const srtxt =document.querySelector('.srtxt')
const ctxt =document.querySelector('.ctxt')
const tltxt =document.querySelector('.tltxt')
const crtxt =document.querySelector('.crtxt')
const ltxt =document.querySelector('.ltxt')
const flag = document.querySelector('.flag')
const title = document.querySelector('.titleText')
const borderC = document.querySelector('.borderC')

document.addEventListener('DOMContentLoaded', () => {
    const selectedCountry = JSON.parse(localStorage.getItem('selectedCountry'));
    
    if (selectedCountry) {
        flag.src=selectedCountry.flags.png;
        title.innerText=selectedCountry.name;
        nntxt.innerText=selectedCountry.nativeName;
        ptxt.innerText=selectedCountry.population;
        rtxt.innerText=selectedCountry.region
        srtxt.innerText=selectedCountry.subregion
        ctxt.innerText=selectedCountry.capital
        tltxt.innerText=selectedCountry.topLevelDomain
       let languages =[]
       selectedCountry.languages.forEach(language => {
            languages.push(language.nativeName)
       });
        ltxt.innerText = languages.toString()
        selectedCountry.borders.forEach(border=>{
            let div = document.createElement('div')
            div.className='border'
            div.innerText=border;
            borderC.appendChild(div)
        })

       let currencies = []
       selectedCountry.currencies.forEach(currency=>{
        currencies.push(currency.name)
       })
       crtxt.innerText=currencies.toString()
    } else {
        Dcontainer.innerHTML = '<p>No country details available.</p>';
    }
});
const backIcon = document.querySelector('.backBtn')
backIcon.addEventListener('click',()=>{
    window.history.back();
})