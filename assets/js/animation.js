document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();

    // Задержка перед появлением логотипа
    tl.from(".welcome__logo", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        delay: 0.5, // Задержка в 0.5с перед логотипом
    });

    // Разбиваем текст на буквы вручную
    const title = document.querySelector(".welcome__title");
    const text = title.textContent;
    title.innerHTML = ""; // Очищаем текст

    text.split("").forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = 0; // Скрываем каждую букву
        span.classList.add("letter");
        title.appendChild(span);
    });

    const letters = document.querySelectorAll(".welcome__title .letter");

    // Анимация самописного текста с ускоренным стартом
    tl.to(letters, {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.05   , // Чуть быстрее
        ease: "power2.out",
    }, "-=1.7"); // Запуск текста раньше, чем заканчивается анимация лого
});