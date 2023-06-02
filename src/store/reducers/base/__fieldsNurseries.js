

export default function(){
  return {
    order: [
      "activeCards",
      "card_name",
      "cards_logo",
      "cards_description_mini",
      "cards_description_full",
      "cards_photos",
      "card_city",
      "cards_coords",
      "card_phone",
      "card_mail",
      "specialization",
      "breeds",
      "card_site",
    ],
    card_name:{
      type:"text", 
      name: "card_name",  
      placeholder: "Наименование питомника*", 
      label:"Наименование питомника*", 
      wrapClass: "col-12 account-item",
      validate: ['required', 'minLength'],
      num:"01"
    },
    card_site:{
      type:"text", 
      name: "card_site",  
      placeholder: "Адрес сайта питомника", 
      label:"Адрес сайта питомника", 
      wrapClass: "col-12 account-item",
      num:"12"
    },
    card_city:{
      type:"city", 
      name: "card_city",  
      placeholder: "Выберите город", 
      label:"Выберите город", 
      wrapClass: "col-12 account-item",
      num: "06"
    },
    card_mail:{
      type:"text", 
      name: "card_mail",  
      placeholder: "Email питомника", 
      label:"Email питомника", 
      wrapClass: "col-12 account-item",
      validate: ['required', 'minLength'],
      num:"09"
    },
    card_phone:{
      type:"phone", 
      name: "card_phone",  
      placeholder: "Телефон питомника", 
      label:"Телефон питомника", 
      wrapClass: "col-12 account-item",
      validate: ['required', 'minLength'],
      num:"08"
    },
    cards_coords: { 
      type:"coords", 
      name: "cards_coords",  
      placeholder: "Адрес", 
      label: " Выберите адрес",
      wrapClass: "col-12 account-item",
      num: "07",
    },
    cards_description_mini:{
      type:"textarea", 
      name: "cards_description_mini",  
      placeholder: "Краткое описание", 
      label:"Краткое описание", 
      labelSecond:"Длина текста не должна превышать 110 символов, включая пробелы.", 
      wrapClass: "col-12 account-item",
      num: "03",
      maxLength: 110
    },
    cards_description_full:{
      type:"textarea", 
      name: "cards_description_full",  
      placeholder: "Полное описание", 
      label:"Подробное описание", 
      labelSecond:"Длина текста не должна превышать 3 000 символов, включая пробелы.", 
      wrapClass: "col-12 account-item",
      maxLength: 3000,
      num: "04",
    },    
    cards_photo: {
      type: "file", 
      name: "cards_photo", 
      label:"Фото питомника", 
      labelSecond:"Вы можете загрузить до 10 файлов. Вес каждого файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png. ", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      textEmpty: "Загрузите фото",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item"
    },
    cards_logo: {
      type: "file", 
      name: "cards_logo", 
      label:"Загрузите логотип питомника", 
      labelSecond:"(Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png.  )", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      textEmpty: "Загрузите логотип",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item",
      num: "02"
    },
    cards_photos: {
      type: "dropzone", 
      name: "cards_photos", 
      label:"Загрузите фото питомника", 
      labelSecond:"(Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png.  )", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      num: "05",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item"
    },
    specialization: {
      type: "list", 
      name: "specialization", 
      label:"Выберите специализацию", 
      wrapClass: "col-12 account-item",
      num: "10",
      options:[
        {label: "Кошки", value:"type_1"},
        {label: "Собаки", value:"type_2"},
        {label: "Рыбки", value:"type_3"},
        {label: "Грузуны", value:"type_3"},
        {label: "Птицы", value:"type_4"},
        {label: "Хладнокровные", value:"type_4"},
      ]
    },
    breeds: {
      type:"text", 
      name: "breeds",  
      placeholder: " Выберите породу", 
      label:" Выберите породы ", 
      wrapClass: "col-12 account-item",
      num: "11",
    },
    activeCards: {
      type:"switch",
      name: "activeCards", 
      label: "Статус", 
      options: [
        {name:"Активно",value:"on"},
        {name:"Не активно", value:"off"},
      ],
      wrapClass: "col-12 account-item"
    },
    titleOne: {
      type:"title",
      label:"Основаная информация",
      num: "01",
      wrapClass: "col-12 account-item",
      
    },
  }

}