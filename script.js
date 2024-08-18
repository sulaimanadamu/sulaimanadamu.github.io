'use strict'

const menuIcon = document.querySelector('#mobile-menu')
const sidebar = document.getElementById('mobile-sidebar-backg')
const cancelBtn = document.getElementById('mobile-cancel')
const dropFeatures = document.getElementById('mobile-drop-features-arrow')
const dropCompanyInfo = document.getElementById('mobile-drop-comp-arrow')
const mobileFeatures = document.getElementById('mobile-features-info')
const company = document.getElementById('mobile-company-info')
const computerFeatureArrow = document.getElementById('desktop-fea-arrow')
const computerCompArrow = document.getElementById('desktop-comp-arrow')
const computerCompPopout = document.getElementById('company-info-desktop')
const computerfeatursPopout = document.getElementById('features-info-desktop')

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


