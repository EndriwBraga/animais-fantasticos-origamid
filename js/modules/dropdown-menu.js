import outsideClick from './outsideclick.js';

export default function initDropDownMenu(){
    const dropdownsMenus = document.querySelectorAll('[data-dropdown]');

// menu.addEventListener(userEvent, handleClick, {passive:true}); //// Não posso usar por que to usando preventDefault e devia por causa da acessibilidade no touchstart.
    dropdownsMenus.forEach(menu =>{
        ['touchstart','click'].forEach(userEvent =>{
            menu.addEventListener(userEvent, handleClick);
        })
    })

    function handleClick(event){
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['touchstart','click'], () =>{
            this.classList.remove('active');
        });
    }
}




 