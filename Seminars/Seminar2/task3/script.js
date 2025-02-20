// Задание 3.
 
// У вас есть кнопка "Купить". Создайте скрипт, который при клике 
// на эту кнопку меняет её текст на "Товар добавлен в корзину" в 
// течение 2 секунд, а затем возвращает исходный текст "Купить". 
// В обработчике события клика также проверьте, является ли 
// событие доверенным (event.isTrusted). Если событие является
// доверенным, выполните изменение текста кнопки и убедитесь, 
// что после 2 секунд текст возвращается в исходное состояние.

const buyButtonEl = document.querySelector('.buy-button');

buyButtonEl.addEventListener('click', event => {
  if (event.isTrusted){
    event.target.innerHTML = 'Товар добавлен в корзину';
    event.target.disabled = true;
    setTimeout(() => {
      event.target.innerHTML = "Купить";
      event.target.disabled = false;
    }, 1000);
  }
});

