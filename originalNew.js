/* Задание на урок 1:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


/* Задание на урок 2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания
'use strict';

let personalMovieDB = [];
let a = JSON.parse(localStorage.obj);

console.log(a);


for(let key in a){

    //     console.log(a[key]);
    //       for(let k in a[key]){
            
    //         result.innerHTML += `${a} : ${k} : ${a[key][k]}`; 
    //     console.log(a[key][k]);
    // }
        result.innerHTML += `${key} : ${a[key]} </br>  `;
   

}

 personalMovieDB = {
    count : 0,
    movies :  {
         i: 3
    },
    actors : {
        k: 7
    },
    genres : [],
    privat : false,
     start: () => {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
                 while (personalMovieDB.counts == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        },
     films: () =>{
            for(let i = 0; i < 2; i++){
                let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
                    filmsRaiting = prompt('На сколько оцените его?', ''); 
                if( lastFilm != null && filmsRaiting != null && lastFilm != '' && filmsRaiting != '') {
                    personalMovieDB.movies[lastFilm] = filmsRaiting;
                    console.log('done');
                } else{
                    console.log('error');
                    i--;
                } 
            }
            },

     detectPersonalLevel: () => {
                if(personalMovieDB.count < 10) {
                   console.log("Просмотрено довольно мало фильмов"); 
                }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
                    console.log("Вы классический зритель");
                }else if(personalMovieDB.count >= 30){
                    console.log("Вы киноман");
                }else{
                   console.log("Произошла ошибка");
                }
                },
     showMyDB: (hidden) => {
                if (!hidden) {
                        console.log(personalMovieDB);
                    }
                },
     toggleVisibleMyDB: ()=>{
         if(personalMovieDB.privat){
            personalMovieDB.privat = false;
         }else{
            personalMovieDB.privat = true;
         }
     },
      writeYourGeners: () => {
        //   for(let i = 1; i <= 3; i++){
        //       let genres = prompt(`Ваш любимый жанр под номером ${i}`);
        //       if(genres === '' || genres == null){
        //           console.log('Вы ввели некорректные данные или не ввели их вовсе!');
        //           i--;
        //       }else{
        //       personalMovieDB.genres[i-1] = genres;
        //     }
        //   }

        for(let i = 1; i < 2; i++){

            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

              if(genres === '' || genres == null){
                  console.log('Вы ввели некорректные данные или не ввели их вовсе!');
                  i--;
              }else{
              personalMovieDB.genres = genres.split(', ');
              personalMovieDB.genres.sort();
            }

        }

              personalMovieDB.genres.forEach((item, i) =>{
                  console.log(`Любимый жанр ${i+1} -  это ${item}`);
                result.innerHTML +=  `Любимый жанр ${i+1} -  это ${item}</br>`;
              });
      }          
};


personalMovieDB.push = personalMovieDB.writeYourGeners();
 localStorage.obj = JSON.stringify(personalMovieDB);






// if(personalMovieDB.genres){
//     result.innerHTML = personalMovieDB.genres;
// }else{
//     result.innerHTML = 'Empty';
// }



//console.log(personalMovieDB);


