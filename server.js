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


// ROUTES
app.get('/', function (request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'Федеральный Российский портал о домашних животных Zoonika');
        data = data.replace(/\$OG_DESCRIPTION/g, "Сайт о животных Zoonika.com создан для владельцев питомников, ветеринарных клиник и любителей кошек и собак. Здесь можно купить или получить в дар кошку или собаку любой породы.");
        data = data.replace(/\$KEYWORDS/g, "сайт портал ресурс о животных кошках собаках породы объявления продажа питомники");
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
            data = data.replace(/\$OG_TITLE/g, resp.titleSeo);
            data = data.replace(/\$OG_DESCRIPTION/g, resp.desriptionSeo);
            data = data.replace(/\$KEYWORDS/g, resp.keywordsSeo);
            let result = data;
            response.send(result);
        });
    });
});




app.get('/pitomniki/', function (request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data)
        data = data.replace(/\$OG_TITLE/g, 'Все питомники на сервисе Зооника');
        data = data.replace(/\$OG_DESCRIPTION/g, "Все питомники на сервисе Зооника");
        data = data.replace(/\$KEYWORDS/g, "Все питомники на сервисе Зооника");
        let result = data;
        response.send(result);
    });
});

// app.get('/pitomniki/:elementId', function (request, response) {
//     const filePath = path.resolve(__dirname, './build', 'index.html')
//     fs.readFile(filePath, 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(data)
//         data = data.replace(/\$OG_TITLE/g, resp.titleSeo);
//         data = data.replace(/\$OG_DESCRIPTION/g, resp.desriptionSeo);
//         data = data.replace(/\$KEYWORDS/g, resp.keywordsSeo);
//         let result = data;
//         response.send(result);
//     });
// });


app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function (request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'Федеральный Российский портал о домашних животных Zoonika');
        data = data.replace(/\$OG_DESCRIPTION/g, "Сайт о животных Zoonika.com создан для владельцев питомников, ветеринарных клиник и любителей кошек и собак. Здесь можно купить или получить в дар кошку или собаку любой породы.");
        data = data.replace(/\$KEYWORDS/g, "сайт портал ресурс о животных кошках собаках породы объявления продажа питомники");
        let result = data;
        response.send(result);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));