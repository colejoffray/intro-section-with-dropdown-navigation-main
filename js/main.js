const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const pageCover = document.querySelector('#cover');

//Feature and Company Dropdown
const featuresToggler = document.getElementById('features-toggle')
const featuresMenu = document.querySelector('.features-dropdown')
const featuresArrow = document.getElementById('featuresArrow') 

const companyToggler = document.getElementById('company-toggle')
const companyMenu = document.querySelector('.company-dropdown')
const companyArrow = document.getElementById('companyArrow')

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true)
        pageCover.classList.add('covering')
    }else if(visibility === 'true'){
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
        pageCover.classList.remove('covering')
    }

    // console.log(visibility)
})

featuresToggler.addEventListener('click', () => {
    const featuresMenuVisibility = featuresMenu.getAttribute('data-visible')
    if(featuresMenuVisibility === 'false'){
        featuresMenu.setAttribute('data-visible', true)
        featuresToggler.setAttribute('aria-expanded', true)
        featuresArrow.setAttribute('data-visible', true)
    }else if (featuresMenuVisibility === 'true'){
        featuresMenu.setAttribute('data-visible', false)
        featuresToggler.setAttribute('aria-expanded', false)
        featuresArrow.setAttribute('data-visible', false)
    }
})

companyToggler.addEventListener('click', ()=> {
    const companyMenuVisibility = companyMenu.getAttribute('data-visible')
    if(companyMenuVisibility === 'false'){
        companyMenu.setAttribute('data-visible', true)
        companyToggler.setAttribute('aria-expanded', true)
        companyArrow.setAttribute('data-visible', true)
    }else if (companyMenuVisibility === 'true'){
        companyMenu.setAttribute('data-visible', false)
        companyToggler.setAttribute('aria-expanded', false)
        companyArrow.setAttribute('data-visible', false)
    }
})

