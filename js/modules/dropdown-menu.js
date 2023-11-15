import outsideClick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(dropdownsMenus, events) {
    this.dropdownsMenus = document.querySelectorAll(dropdownsMenus);

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenusEvent() {
    this.dropdownsMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownsMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
