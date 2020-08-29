/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// ЗАДАЧА 1

const adv = document.querySelectorAll('.promo__adv img'), // получаем все рекламные картинки 
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'), //получаем жанры
    movieList = document.querySelector('.promo__interactive-list');// получаем список фильмов

// 1 способ
adv.forEach(item => { // цикл удаления всех элементов(реклама)
    item.remove();
});

// 2 способ
// adv.forEach(function (item) { // цикл удаления всех элементов(реклама)
//     item.remove();
// });

// ЗАДАЧА 2

genre.textContent = 'драма';

// ЗАДАЧА 3

poster.style.backgroundImage = 'url("img/bg.jpg")';

// ЗАДАЧА 4

movieList.innerHTML = "";// очищаем HTML-структуру

movieDB.movies.sort(); // сортировка

//ЗАДАЧА 5
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});