import SmoothScroll from "smoothscroll-for-websites";

export const init = () => {
    SmoothScroll({
        animationTime: 600,
        stepSize: 60,
        keyboardSupport: true,
        arrowScroll: 100,
        touchpadSupport: true,
    });
}