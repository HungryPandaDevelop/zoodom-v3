const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const axios = require('axios');
const fs = require('fs');

const siteWp = 'http://zoo-base.sait.website/';

// const { initializeApp, applicationDefault, cert } = require('firebase.config');

// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// import {
//     doc,
//     collection,
//     getDocs,
//     query,
//     where,
//     orderBy,
//     deleteDoc,
//     limit
//   } from 'firebase/firestore';
  
  
//   import { toast } from 'react-toastify';
  
//   import { db } from 'firebase.config';

// const listingsRef = collection(db, baseName);

const resetTitles = (data)=>{
    for(let i = 0; i<=20; i++){
        data = data.replace(`$OG_H2_${i}_`, "");
    }
    for(let a = 0; a<=20; a++){
        data = data.replace(`$OG_H3_${a}_`, "");
    }
    return data;
}

app.get('/porodi-sobak/', function (request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'Породы собак с фото названием и описанием по алфавиту 600+');
        data = data.replace(/\$OG_DESCRIPTION/g, "Все породы собак с фотографиями и описанием характера. Каталог собак, который вам поможет выбрать какую собаку завести.");
        data = data.replace(/\$KEYWORDS/g, "собаки породы все псы каталог фото корм вязка питание дрессировка собачек псов библиотека по алфавиту выбор порода щенки");
        data = data.replace(/\$OG_TYPE/g, "article");
        data = data.replace(/\$OG_URL/g, "https://zoonika.com/porodi-sobak/");
        data = data.replace(/\$OG_IMAGE/g, "https://zoo-base.sait.website/wp-content/uploads/2023/03/avstralijskaya-korotkohvostaya-pastushya-sobaka-poroda.jpg");
        data = data.replace(/\$OG_H1/g, "Все породы собак по алфавиту");
        data = data.replace('$OG_H2_1_', "Назначение");
        data = data.replace('$OG_H2_2_', "Размер");
        data = data.replace('$OG_H2_3_', "Содержание");
        data = data.replace('$OG_H2_4_', "Страна");
        data = data.replace('$OG_H2_5_', "Быстрый поиск породы");
        data = data.replace('$OG_H3_1_', "Более 600 пород собак с подробным описанием и характеристиками");
        data = resetTitles(data);

        let result = data;
        response.send(result);
    });
});


app.get('/porodi-koshki/', function (request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'Породы кошек с фото названием и описанием по алфавиту 60+');
        data = data.replace(/\$OG_DESCRIPTION/g, "Все породы кошек с фотографиями и описанием характера. Каталог кошек, который вам поможет выбрать какую кошку завести.");
        data = data.replace(/\$KEYWORDS/g, "кошки породы все котята каталог фото корм вязка питание дрессировка кошечек библиотека по алфавиту выбор порода");
        data = data.replace(/\$OG_TYPE/g, "article");
        data = data.replace(/\$OG_URL/g, "https://zoonika.com/porodi-koshki/");
        data = data.replace(/\$OG_IMAGE/g, "https://zoo-base.sait.website/wp-content/uploads/2023/04/dressirovka-abissinskaya-koshka.jpeg");
        data = data.replace('$OG_H1', "Все породы кошек по алфавиту");
        data = data.replace('$OG_H2_1_', "Размер");
        data = data.replace('$OG_H2_2_', "Страна");
        data = data.replace('$OG_H2_3_', "Быстрый поиск породы");
        data = data.replace('$OG_H3_1_', "Более 60 пород кошек с подробным описанием и характеристиками");
        data = data.replace('$OG_H3_2_', "Страна");
        data = data.replace('$OG_H3_3_', "Быстрый поиск породы");

        
        data = resetTitles(data);
        let result = data;
        response.send(result);
    });
});

app.get('/porodi-:breedsCategory/:breedsID.html', function (request, response) {
    
    axios.get(`${siteWp}/wp-json/breeds/detail?slug=${request.params.breedsID}`).then(res => {
        let resp = res.data[0]
        const filePath = path.resolve(__dirname, './build', 'index.html')
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            // console.log('request.params', resp)
            data = data.replace(/\$OG_TITLE/g, resp.titleSeo);
            data = data.replace(/\$OG_DESCRIPTION/g, resp.desriptionSeo);
            data = data.replace(/\$KEYWORDS/g, resp.keywordsSeo);
            data = data.replace(/\$OG_TYPE/g, "article");
            data = data.replace(/\$OG_URL/g, `https://zoonika.com/porodi-${request.params.breedsCategory}/${request.params.breedsID}.html`);
            data = data.replace(/\$OG_IMAGE/g, resp.images[0].full_image_url);
            data = data.replace(`$OG_H1`, resp.title);
            data = data.replace(`$OG_H2_1_`, "Описание породы");
            data = data.replace(`$OG_H2_2_`, "Внешний вид");
            data = data.replace(`$OG_H2_3_`, "Характер");
            data = data.replace(`$OG_H2_4_`, "Содержание и уход");
            data = data.replace(`$OG_H2_5_`, "Дрессировка и обучение");
            data = data.replace(`$OG_H2_7_`, "Здоровье и болезни");
            data = data.replace(`$OG_H2_8_`, "Дрессировка и обучение");
            data = data.replace(`$OG_H2_9_`, resp.interesnyj_fakt_1.title);
            data = data.replace(`$OG_H2_10_`, resp.interesnyj_fakt_2.title);
            data = data.replace(`$OG_H2_11_`, resp.interesnyj_fakt_3.title);
            if(request.params === 'sobak'){
                data = data.replace(`$OG_H2_6_`, "Как выбрать щенка");
            }else{
                data = data.replace(`$OG_H2_6_`, "Как выбрать котенка");
            }
            if(request.params.breedsCategory === 'sobak'){
                data = data.replace(`$OG_H3_1_`, "Стоимость щенка");
            }
            if(request.params.breedsCategory === 'koshki'){
                data = data.replace(`$OG_H3_1_`, "Стоимость котенка");
            }

            data = data.replace(`$OG_H3_2_`, "Потомство");
            data = data.replace(`$OG_H3_3_`, "Вес");
            data = data.replace(`$OG_H3_4_`, "Страна происхождения");
            data = data.replace(`$OG_H3_5_`, "Длительность жизни");
            data = data.replace(`$OG_H3_6_`, "Рост в холке");
            data = data.replace(`$OG_H3_7_`, "Линька");
            data = data.replace(`$OG_H3_8_`, "Размер");
            data = data.replace(`$OG_H3_9_`, "Голова");
            data = data.replace(`$OG_H3_10_`, "Морда");
            data = data.replace(`$OG_H3_11_`, "Зубы");
            data = data.replace(`$OG_H3_12_`, "Уши");
            data = data.replace(`$OG_H3_13_`, "Глаза");
            data = data.replace(`$OG_H3_14_`, "Туловище");
            data = data.replace(`$OG_H3_15_`, "Лапы");
            data = data.replace(`$OG_H3_16_`, "Шерсть");
            data = data.replace(`$OG_H3_17_`, "Окрас");
            data = data.replace(`$OG_H3_18_`, "Хвост");

            data = data.replace(`$OG_H3_19_`, `Оставить отзыв о породе ${resp.title}`);
            data = resetTitles(data);

            let result = data;
            response.send(result);
        });
    });
});


const metaDefault =(response)=>{
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        // console.log(data)
        data = data.replace(/\$OG_TITLE/g, 'Все питомники на сервисе Зооника');
        data = data.replace(/\$OG_DESCRIPTION/g, "Все питомники на сервисе Зооника");
        data = data.replace(/\$KEYWORDS/g, "Все питомники на сервисе Зооника");

        let result = data;
        response.send(result);
    });
}

const arrPage = ['/pitomniki/', '/authorization/', '/registration/', '/rule-public/','/privacy-policy/','/usloviya/'];

arrPage.forEach((el)=>{
    app.get(el, function (request, response) {
        metaDefault(response);
    });
});




app.get('/',function (request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'Федеральный Российский портал о домашних животных Zoonika');
        data = data.replace(/\$OG_DESCRIPTION/g, "Сайт о животных Zoonika.com создан для владельцев питомников, ветеринарных клиник и любителей кошек и собак. Здесь можно купить или получить в дар кошку или собаку любой породы.");
        data = data.replace(/\$KEYWORDS/g, "сайт портал ресурс о животных кошках собаках породы объявления продажа питомники");

        data = data.replace(/\$OG_H1/g, "");
        data = data.replace(/\$OG_TYPE/g, "");
        data = data.replace(/\$OG_URL/g, "https://zoonika.com/");
        data = data.replace(/\$OG_IMAGE/g, "https://zoo-base.sait.website/wp-content/uploads/2023/06/vibor-pitomnika-zoonika.png");

 
        data = resetTitles(data);

        let result = data;
        response.send(result);
    });
});

app.use(express.static(path.resolve(__dirname, './build')));



app.listen(port, () => console.log(`Listening on port ${port}`));