document.addEventListener("DOMContentLoaded", function () {
    const openSearchButton = document.getElementById("openSearchButton");
    const searchForm = document.getElementById("searchForm");

    openSearchButton.addEventListener("click", function () {
        // Переключаем класс для анимации
        searchForm.classList.toggle("hidden");
        searchForm.classList.toggle("visible");
    });
});
