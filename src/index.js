const dropdownTabs = document.querySelectorAll('[data-dropdown]');
const panelNames = document.querySelectorAll('.tab-title');
const dropdownContent = document.getElementsByClassName('panel-drop-content');

//Dynamically set height of dropdown name label
window.addEventListener('resize', () => {
    dropdownTabs.forEach(dropdownTab => {
        let height = dropdownTab.children[0].offsetHeight;
        dropdownTab.style.height = `${height}px`
    });
})



//Click dropdown
const workingClass = dropdownContent.classList;

// console.log(tabToggle);
//Add event listeners to tab title divs
panelNames.forEach(e => {
    e.addEventListener('click', dropDown)
})

//Event Handler function
function dropDown(event) {

    if (!panelNames && event.target.closest('.dropdown-tab') != null) return;
    let currentDropdown;
    // let dropContent;
    if (panelNames) {
        currentDropdown = event.target.closest('.dropdown-tab');
        if (currentDropdown.style.height != '100%') {
            currentDropdown.style.height = '100%';
        } else {
            currentDropdown.style.height = `${currentDropdown.children[0].offsetHeight}px`
        }
    }

}
// tabTest.addEventListener('click', e => {
//     console.log(dropdownContent);

//     if (dropdownContent.style.display == 'none') {
//         dropdownContent.style.display = 'block';

//     } else {
//         dropdownContent.style.display = 'none';
//     }
// })