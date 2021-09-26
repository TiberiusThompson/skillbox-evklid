
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".our-work-item__btn").forEach(function(tabsBtn) {
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
    })
}) 