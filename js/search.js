window.addEventListener('DOMContentLoader', function() {
    document.querySelector('#header__search').addEventListener('click', function () {
        document.querySelector('#header-search').classList.toggle('swiced')
    })
})