import {NavMenuOptions} from "../types/nav-menu-options.ts";

export class ToggleNavMenu {
    private isOpen = false;
    private readonly toggleBtn: HTMLElement;
    private readonly openClass: string;

    public constructor(private element: HTMLElement, option: NavMenuOptions) {
        this.toggleBtn = option.toggleBtn;
        this.openClass = option.openClass;
        this.init();
    }

    private toggle = () => {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.open();
        } else {
            this.close();
        }
    }

    private onKeyDown = (evt: KeyboardEvent) => {
        if(evt.key === 'Escape') {
            this.close();
            this.toggleBtn.focus();
        }
    }

    private init() {
        this.toggleBtn.addEventListener('click', this.toggle);
        window.addEventListener('keydown', this.onKeyDown);
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