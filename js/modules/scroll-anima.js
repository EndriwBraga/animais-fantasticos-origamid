export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll('[data-anime="scroll"]');
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distancia de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distancia de cada objeto
  // em relação ao scroll do site
  checkDistance() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    this.distance.forEach((item) => {
      if (scrollPosition > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // Remove o event de scroll
  stop() {
    window.remove("scroll", this.checkDistance);
  }
}
