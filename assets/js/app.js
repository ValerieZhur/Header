document.addEventListener("DOMContentLoaded", appStart);
            
function appStart() {
    let burgerMenu = document.querySelector('.menu-burger__header');
    let headerTitle = document.querySelector('.header-title');
    let menuItem = document.querySelector('.menu-item:nth-child(3)');
    let search = document.querySelector('.btn-search');
    let navbar = document.querySelector('.navbar');
    let headerActions = document.querySelector('.header-actions');
    let headerForm = document.querySelector('.header-form');
    let cancelSearch = document.querySelector('.cancel-search');
    let headerInput = document.querySelector('.header-input');
    let btnArrow = document.querySelector('.form-arrow');

    search.addEventListener('click', searchClick);
    cancelSearch.addEventListener('click', сlickBtn);
    btnArrow.addEventListener('click', сlickBtn);

    function searchClick() {
        navbar.classList.add("hide");
        headerActions.classList.add("hide");
        headerTitle.classList.add("hide");
        headerForm.classList.remove("hide");
        burgerMenu.classList.add("hide");
        headerInput.focus();

    }

    function сlickBtn() {
        navbar.classList.remove("hide");
        headerTitle.classList.remove("hide");
        headerActions.classList.remove("hide");
        headerForm.classList.add("hide");
        burgerMenu.classList.remove("hide");
    }              
}