import {NavMenuOptions} from "../types/nav-menu-options.ts";

export class ToggleNavMenu {
    private isOpen = false;
    private readonly toggleBtn: HTMLElement;
    private readonly openClass: string;

    public constructor(private element: HTMLElement, option: NavMenuOptions) {
        this.element = element;
        this.toggleBtn = option.toggleBtn;
        this.openClass = option.openClass;
        this.init();
    }

    public toggle = () => {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.open();
        } else {
            this.close();
        }
    }

    private init() {
        this.toggleBtn.addEventListener('click', this.toggle);
    }

    private open() {
        this.element.classList.add(this.openClass);
    }

    private close() {
        this.element.classList.remove(this.openClass);
    }

    public destroy() {
        this.toggleBtn.removeEventListener('click', this.toggle);
    }
}