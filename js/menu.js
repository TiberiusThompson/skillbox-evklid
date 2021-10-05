window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__burger').addEventListener('click', function () {
        document.querySelector('#header-menu').classList.toggle('swiched')
        document.querySelectorAll('header__nav').classList.toggle('swiched')
    })
})