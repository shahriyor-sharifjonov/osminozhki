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

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const inputs = form.querySelectorAll('input');
            inputs.forEach(el => {
                el.value = ''
            })
            const popups = document.querySelectorAll('.popup');
            popups.forEach(el => {
                el.classList.remove('active')
            })
            const thanks = document.querySelector('.popup#thanks');
            thanks.classList.add('active');
        })
    })

}