import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";

export class AppSwiper {
    constructor() {
        this.init();
    }

    private swiper!: Swiper
    private currentSlide = document.querySelector('.artefacts__swiper-pagination--current') as HTMLElement;
    private totalSlide = document.querySelector('.artefacts__swiper-pagination--total') as HTMLElement;

    private init() {
        const element = document.querySelector('.swiper') as HTMLElement;
        if (element) {
            this.swiper = new Swiper(element, {
                modules: [Navigation, Pagination],
                slidesPerView: 4,
                spaceBetween: 30,
                speed: 600,
                navigation: {
                    addIcons: false,
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    0: {slidesPerView: 1},
                    576: {
                        slidesPerView: 2,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    768: {slidesPerView: 3},
                    1023: {slidesPerView: 4},
                },
                on: {
                    init: (swiper) => {
                        console.log(swiper.params.slidesPerView);
                        console.log(swiper.slides.length);
                        this.totalSlide.textContent = String(Number(swiper.slides.length) - Number(swiper.params.slidesPerView) + 1);
                        this.currentSlide.textContent = String(swiper.activeIndex + 1)
                    },
                    slideChange: (swiper) => {
                        this.currentSlide.textContent = String(swiper.activeIndex + 1);
                    },
                     resize: (swiper) => {
                         this.totalSlide.textContent = String(Number(swiper.slides.length) - Number(swiper.params.slidesPerView) + 1);
                         this.currentSlide.textContent = String(swiper.activeIndex + 1)
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