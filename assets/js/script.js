document.addEventListener("DOMContentLoaded", function () {
    const switches = document.querySelectorAll(".service__item-switch input");

    switches.forEach((switchInput) => {
        const parentItem = switchInput.closest(".service__item");
        const priceSpan = parentItem.querySelector(
            ".service__item-content-point-price p span"
        );
        const underText = parentItem.querySelector(".service__spans-undertext");

        if (!priceSpan || !underText) return; // Проверяем, есть ли элементы

        const priceForTwo = parseInt(priceSpan.textContent.replace(/\D/g, ""));
        const priceForOne = priceForTwo - 4000; // Логика вычета цены

        // Проверяем при загрузке страницы
        if (switchInput.checked) {
            priceSpan.innerHTML = `${priceForOne} &#8381;`;
            underText.classList.add("active");
        }

        switchInput.addEventListener("change", function () {
            if (switchInput.checked) {
                priceSpan.innerHTML = `${priceForOne} &#8381;`;
                underText.classList.add("active");
            } else {
                priceSpan.innerHTML = `${priceForTwo} &#8381;`;
                underText.classList.remove("active");
            }
        });
    });

    function setVH() {
        let vh = window.innerHeight * 1.00; // Получаем 1% от высоты экрана
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    
    window.addEventListener("resize", setVH);
    window.addEventListener("load", setVH);
});
