'use strict'

const menuIcon = document.querySelector('#menu')
const sidebar = document.getElementById('sidebar-backg')
const cancelBtn = document.getElementById('cancel')
const dropFeatures = document.getElementById('drop-features-arrow')
const dropCompanyInfo = document.getElementById('drop-comp-info-arrow')
const mobileFeatures = document.getElementById('mobile-features-info')
const company = document.getElementById('mobile-company-info')
const computerFeatureArrow = document.getElementById('fea-arrow')
const computerCompArrow = document.getElementById('desktop-comp-arrow')
const computerCompPopout = document.getElementById('company-info-desktop')
const computerfeatursPopout = document.getElementById('features-info-desktop')


// console.log(company.style.display)

// const drops = {
//     featuresDrop : true,
//     CompanyDrop : true
// }

// function rotate(rotUp, drop, param){
//     if(rotUp[param]){
//         drop.src= "./images/icon-arrow-up.svg"
//         rotUp[param] = false
//     }
//     else{
       
//          drop.src = "./images/icon-arrow-down.svg"
//          rotUp[param] = true
      
//     }
// }

function showItems(dropdown, asWhat){
    if(dropdown.classList.contains('show-list-item')){
        dropdown.style.display = asWhat;
    }
    else{
        dropdown.style.display = 'none'
    }
}

menuIcon.addEventListener('click', function(){
    sidebar.style.display = 'block';
})

cancelBtn.addEventListener('click', function(){
    sidebar.style.display = 'none';
})

dropFeatures.addEventListener('click', function(){
   // rotate(drops, dropFeatures, 'featuresDrop')
    // console.log(featuresRotUp,dropFeatures)
    dropFeatures.classList.toggle('arrowUp')
    mobileFeatures.classList.toggle('show-list-item')
    showItems(mobileFeatures, "block")
})

dropCompanyInfo.addEventListener('click', function(){
    dropCompanyInfo.classList.toggle('arrowUp')
    company.classList.toggle('show-list-item')
    showItems(company, "block")
})

computerFeatureArrow.addEventListener('click', function(){
    computerFeatureArrow.classList.toggle('arrowUp')
    computerfeatursPopout.classList.toggle('show-list-item')
    showItems(computerfeatursPopout, 'flex')
})

computerCompArrow.addEventListener('click', function(){
    computerCompArrow.classList.toggle('arrowUp')
    computerCompPopout.classList.toggle('show-list-item')
    showItems(computerCompPopout, "flex")
})


