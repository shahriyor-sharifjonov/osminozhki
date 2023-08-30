export const init = () => {
    const closes = document.querySelectorAll('.popup-close');
    const opens = document.querySelectorAll('.open-popup');
    const popups = document.querySelectorAll('.popup');
    
    closes.forEach(close => {
        close.addEventListener('click', () => {
            popups.forEach(p => {
                p.classList.remove('active')
            })
        })
    })
    
    opens.forEach(open => {
        open.addEventListener('click', () => {
            const t = open.getAttribute('data-target');
            const el = document.querySelector(`#${t}`);
            el.classList.add('active')
        })
    })
}