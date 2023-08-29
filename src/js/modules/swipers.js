import Swiper, { FreeMode, Navigation, Pagination } from 'swiper';

export const init = () => {
    const swiper = new Swiper(".trainers__swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        modules: [FreeMode, Navigation],
        loop: true,
        navigation: {
            nextEl: ".trainers__next",
            prevEl: ".trainers__prev"
        },
        breakpoints: {
            480: {
                spaceBetween: 30,
            },
            576: {
                freeMode: true,
            }
        }
    });
}