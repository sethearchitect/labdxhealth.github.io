const dropdownTabs = document.querySelectorAll('dropdown-tab');

//Product panel title tab
const panelNames = document.querySelectorAll('.tab-title');
//FAQ titles
const qNames = document.querySelectorAll('.q-title');
//Product panel dropdown content
const dropdownContent = document.getElementsByClassName('panel-drop-content');
//product panels dropdown button
const dropdownbtn = document.querySelectorAll('#dropdown-btn');
//FAQ question title tabs
const questions = document.querySelectorAll('.question');


//Navbar

const header = document.querySelector('.header-one');
const nav = document.querySelector('nav');
const navToggle = document.getElementById('ham');

navToggle.addEventListener('click', () => {
    header.classList.toggle('nav-active');
})

let scrollState = 0;
window.addEventListener('scroll', () => {
    let yScroll = window.scrollY
    if (scrollState == 0) {

    }

    if (yScroll > scrollState) {
        header.classList.remove('open');
        header.classList.add('collapse');
    } else {
        header.classList.remove('collapse');
        header.classList.add('open');
    }

    scrollState = yScroll;
})

function dropDownFunc(elements) {
    elements.forEach(element => {
        element.addEventListener('click', dropDown);
    })

}

function dropDown() {
    let content = this.nextElementSibling;

    this.classList.toggle('active');
    content.classList.toggle('show');

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }

}

dropDownFunc(panelNames);
dropDownFunc(qNames);


//Hero section scroll animation

const heroDivs = document.querySelectorAll('.slide');

// const hdOptions = {
//     threshold: 1
// }

// const hdObserver = new IntersectionObserver(function (entries, hdObserver) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             entry.target.classList.add('focused');
//             hdObserver.unobserve(entry.target);
//         }
//     })
// }, hdOptions)

//create intersection observer instance for feature points

const fPoints = document.querySelectorAll('.f-points');

const featureOptions = {
    threshold: 0,
    rootMargin: '-100px 0px 0px 0px'
};

const featureObserver = new IntersectionObserver(function (entries, featureObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('focused');
            featureObserver.unobserve(entry.target);
            console.log(entry.target);
        }
    })
}, featureOptions);

fPoints.forEach(fPoint => {
    featureObserver.observe(fPoint);
})

heroDivs.forEach(heroDiv => {
    featureObserver.observe(heroDiv);
})



/*const observer = new IntersectionObserver(function (entries, observer) {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target);
        }
    })
}, options);

sections.forEach(section => {
    observer.observe(section);
})*/