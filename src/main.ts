import "./style.scss";
import {ToggleNavMenu} from "./modules/toggle-nav-menu.ts";
import {AppSwiper} from "./modules/swiper.ts";
import {ArtefactListRenderer} from "./modules/artefact-list-renderer.ts";
import {store} from "./store/store.ts";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const headerNavMenu = document.querySelector(
            ".header-main__nav",
        ) as HTMLElement;
        const headerToggleNav = document.querySelector(
            ".header-main__button-burger",
        ) as HTMLElement;

        const navMenu = new ToggleNavMenu(headerNavMenu, {
            toggleBtn: headerToggleNav,
            openClass: "header-main__nav--open",
        });

        const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;

        const swiper = new AppSwiper();
        const artefactListRenderer = new ArtefactListRenderer(swiperWrapper);

        await artefactListRenderer.renderTemplate(store.getState().artefacts.artefacts);

        window.addEventListener("beforeunload", () => {
            navMenu.destroy();
            swiper.destroy();
        });
    } catch (error) {
        console.error("Критическая ошибка при инициализации:", error);
    }
});
