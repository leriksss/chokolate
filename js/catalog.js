const menuItems = document.querySelectorAll(".catalog__menu--item");
const sections = document.querySelectorAll(".catalog__product");


const onDOMContentLoaded = function () {
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            const target = this.dataset.target;

            menuItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");

            sections.forEach(section => {
                section.classList.remove("active");
                section.style.display = "none";
            });

            const activeSection = document.querySelector(`.catalog__product[data-section="${target}"]`);
            if (activeSection){
                activeSection.classList.add("active");
                activeSection.style.display = "grid";
            }
        });
    });
};


document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
