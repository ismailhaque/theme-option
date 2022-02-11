// get element 
const menu = document.querySelectorAll(`.theme-option .tab-menu ul li a`);
const contant = document.querySelectorAll(`.theme-option .tab-body .contant`);
menu.forEach(item => {
    item.addEventListener(`click`, function(e){
        e.preventDefault();
        menu.forEach(item => {
            item.classList.remove(`active`);
        })
        item.classList.add(`active`);
        const tab_body = document.querySelector(this.getAttribute(`href`));
        contant.forEach(item => {
            item.classList.remove(`active`);
        })
        tab_body.classList.add(`active`);
    })
})