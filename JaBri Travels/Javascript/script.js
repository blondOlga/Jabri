
// --------------------------------------------------------------------------------------
//  Script for header when we scroll down it gets sticky and for navigation bar top right

let navbar = document.querySelector('.header .navbar');

document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

// --------------------------------------------------------------------------------------
//                Top right - "hamburger" script 

const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation__menu')

const header = document.querySelector('.header')

const IS_ACTIVE = 'is-active'     // for hamburger
const SHOW = 'show'
const WITH_BACKGROUND = 'with__background'

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle(IS_ACTIVE)     // for hamburger 
    navigation.classList.toggle('open')     // for navigation menu
})


// --------------------------------------------------------------------------------------
//                 Packages section boxes slider script 


const productContainers = [...document.querySelectorAll('.Packages-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// --------------------------------------------------------------------------------------
//         Tap to "Top btn" (rocket sign btn bottom right when we scroll) script


$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000"); return false }) })