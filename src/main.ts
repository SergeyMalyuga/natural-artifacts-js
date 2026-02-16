import './style.scss';
import {ToggleNavMenu} from "./modules/toggle-nav-menu.ts";

document.addEventListener('DOMContentLoaded', () => {
    const headerNavMenu = document.querySelector('.header-main__nav') as HTMLElement;
    const headerToggleNav = document.querySelector('.header-main__button-burger') as HTMLElement;

    const navMenu = new ToggleNavMenu(headerNavMenu, {
        toggleBtn: headerToggleNav,
        openClass: 'header-main__nav--open'
    });

    window.addEventListener('beforeunload', () => navMenu.destroy())
})