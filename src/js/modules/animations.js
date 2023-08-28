import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export const init = () => {
    ScrollTrigger.matchMedia({
        "all": function() {
            gsap.utils.toArray(".intro").forEach(el => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "-140px top",
                        end: "bottom top",
                        markers: false,
                        scrub: true,
                    }
                })
                tl.add('start')
                    .fromTo(".intro__title", {
                        y: 0,
                    }, {y: 130}, 'start')
                    .fromTo(".intro__row", {
                        y: 0,
                    }, {y: 130}, 'start')
            })
            gsap.utils.toArray(".intro").forEach(el => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "-140px top",
                        end: "bottom top",
                        markers: false,
                        scrub: 1,
                    }
                })
                tl.add('start')
                    .fromTo(".intro__img img", {
                        y: 0,
                    }, {y: -60}, 'start')
            })
            gsap.utils.toArray(".about__img").forEach(el => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        markers: false,
                        scrub: 1,
                    }
                })
                tl.add('start')
                    .fromTo(".about__img img", {
                        y: 0,
                    }, {y: -100}, 'start')
            })
		},
        "(min-width: 1400px)": function() {
            gsap.utils.toArray(".pool__right").forEach(el => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        markers: false,
                        scrub: 1,
                    }
                })
                tl.add('start')
                    .fromTo(".pool__img-1", {
                        y: 0,
                    }, {y: -100}, 'start')
                    .fromTo(".pool__img-2", {
                        y: 0,
                    }, {y: -80}, 'start')
                    .fromTo(".pool__img-3", {
                        y: 0,
                    }, {y: -120}, 'start')
            })
        },
        "(min-width: 576px)": function() {
        },
        "(max-width: 992px)": function() {
        },
        "(max-width: 576px)": function() {
        },
    })
}