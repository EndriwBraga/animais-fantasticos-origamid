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

function outsideClick(element, events, callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)){
        events.forEach(userEvent =>{
            html.addEventListener(userEvent, handleOutsideClick);
        })
        
        element.setAttribute(outside, '');
    }
    function handleOutsideClick(event){

        if(!element.contains(event.target)){
            element.removeAttribute(outside);
            events.forEach(userEvent =>{
                html.removeEventListener(userEvent, handleOutsideClick);
            })
            callback()
    }
    }
}
}


