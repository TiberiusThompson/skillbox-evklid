
window.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".our-work-item__btn").forEach((tabsBtn, index) => {
        if (index === 0) {
            console.log(tabsBtn.classList)
            tabsBtn.classList.add('our-work-content-active');
        }
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;
            console.log("path")

            document
            .querySelectorAll(".our-work-content")
            .forEach(function(tabContent) {
                tabContent.classList.remove("our-work-content-active")
            })

            document
            .querySelector(`[data-target="${path}"]`).classList.add("our-work-content-active")
        })

        // document.querySelectorAll("#header-search").forEach(function(act) {
        //     act.addEventListener('click', function(event1) {
        //         console.log("event1")
        //         event1.target.classList.toggle('header-search-form-active')
        //     })
        // })

        // document.querySelector("#header-search").addEventListener('click', function() {
        //     document.querySelector("#search-menu").classList.toggle("header-search-form-active")
        // })

        // document.querySelectorAll('.our-work-item__btn').forEach

        // document
        // .querySelectorAll('.our-work-item__btn')
        // .forEach(function(BTNactive) {
        //   BTNactive.classList.remove('our-work-item__btn_active')
        // })

        // document.
        // .querySelector(`[data-target="${path}"]`).classList.add("our-work-item__btn_active")
    })

    // document.querySelectorAll('.our-work-item__btn').forEach(function(act) {
    //   act.addEventListener('click', function(click) {
    //     click.target.classList.toggle('our-work-item__btn_active')
    //   })
    // })
}) 