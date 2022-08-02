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


