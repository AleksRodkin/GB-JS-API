// Задание 1.
// 1. Необходимо выводить на страницу текущую ширину 
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.

const widthBom = window.innerWidth;
const heightBom = window.innerHeight;

const resaultEl = document.querySelector(".widht-height");
resaultEl.innerHTML = `ширина:${widthBom} высота:${heightBom}`;

window.addEventListener("resize", () => {
  resaultEl.innerHTML = `ширина:${window.innerWidth} высота:${window.innerHeight}`;
});

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

// 2. При закрытии страницы (вкладки), необходимо выводить 
// всплывающее окно или диалоговое окно браузера и 
// спросить, уверен ли пользователь, что хочет покинуть 
// страницу?


// 3. Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.