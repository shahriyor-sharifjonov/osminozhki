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
    const swiper2 = new Swiper(".reviews__swiper", {
        spaceBetween: 20,
        slidesPerView: 1,
        modules: [FreeMode, Navigation],
        loop: true,
        navigation: {
            nextEl: ".reviews__next",
            prevEl: ".reviews__prev"
        },
        breakpoints: {
            768: {
                slidesPerView: "auto",
            },
        }
    });
}