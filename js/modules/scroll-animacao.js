export default function initAnimacaoScrollpag(){
    const sections = document.querySelectorAll('[data-scroll="scroll"]');
    
    if(sections.length){
      const windowMetade = window.innerHeight * 0.5;
    
      function animaScroll(){
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
    
          if(isSectionVisible) 
              section.classList.add('ativo');
          else 
              section.classList.remove('ativo')
        })
      }
    
    animaScroll();
    
    window.addEventListener('scroll', animaScroll);
      }
}