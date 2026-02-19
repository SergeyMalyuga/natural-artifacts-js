import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";

export class AppSwiper {

    constructor() {
        this.init();
    }

    private swiper!: Swiper


    private init() {
        const element = document.querySelector('.swiper') as HTMLElement;
        if (element) {
            this.swiper = new Swiper(element, {
                modules: [Navigation, Pagination],
                slidesPerView: 4,
                observer: true,
                observeParents: true,
                spaceBetween: 30,
                speed: 600,
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                    clickable: true,
                    renderFraction: function (currentClass, totalClass) {
                        return '<span class="' + currentClass + '"></span>' +
                            '<span class="swiper-pagination-separator"> из </span>' +
                            '<span class="' + totalClass + '"></span>';
                    }
                },
                navigation: {
                    addIcons: false,
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        pagination: {
                            type: "bullets",
                        },
                    },
                    576: {
                        slidesPerView: 2,
                        pagination: {
                            type: "fraction",
                        }
                    },
                    768: {slidesPerView: 3},
                    1023: {
                        slidesPerView: 4
                    },
                },
                on: {
                    resize: (swiper) => {
                        swiper.update();
                        swiper.pagination.update();
                    }
                },
            })
        }
    }

    public destroy: () => void = () => {
        if (this.swiper) {
            this.swiper.destroy();
        }
    }
}