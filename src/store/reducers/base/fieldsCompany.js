

export default function(){
  return {
    order: [
      "activeCards",
      "typeCompany",
      "card_name",
      "cards_logo",
      "cards_description_mini",
      "cards_description_full",
      "cards_photos",
      "card_city",
      "cards_coords",
      "card_phone",
      "card_mail",
      "card_site",
      "social",
      "certificates",
      "registerOtherCompany",
      "registerOtherCompanyCat",
      "breeds_nurseries",
    ],
    activeCards: {
      type:"radio",
      name: "activeCards", 
      label: "Статус", 
      options: [
        {label:"Активно", value:"on"},
        {label:"Не активно", value:"off"},
      ],
      wrapClass: "col-12 account-item",
      hideByClickId: false
    },
    typeCompany: {
      type:"showByClick",
      // type: "radio", 
      name: "typeCompany", 
      label:"Тип компании", 
      wrapClass: "col-12 account-item account-item-checkbox",
      num: "01",
      options:[
        {label: "Питомник", value:"nurseries"},
        {label: "Клиника", value:"clinics"},
        {label: "Салон", value:"salons"},
        {label: "Приют", value:"shelter"},
        {label: "Магазин", value:"shop"},
        {label: "Дистрибьютор", value:"distributor"},
      ]
    },
    about_nurseries:{
      type:"text", 
      name: "about_nurseries",  
      label:"О питомнике", 
      wrapClass: "col-12 account-item input-animate-label",
      // validate: ['required', 'minLength'],
      num:"02",
      hideByClickId: 'nurseries'
    },
    card_name:{
      type:"text", 
      name: "card_name",  
      label:"Наименование компании*", 
      wrapClass: "col-12 account-item input-animate-label",
      validate: ['required', 'minLength'],
      num:"02"
    },
    cards_logo: {
      type: "file", 
      name: "cards_logo", 
      label:"Загрузите логотип компании", 
      labelSecond:"Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png.", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 500000, 
      textEmpty: "Загрузите логотип",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item img-item-input",
      num: "03"
    },
    cards_description_mini:{
      type:"textarea", 
      name: "cards_description_mini",  
      label:"Краткое описание", 
      labelSecond:"Длина текста не должна превышать 110 символов, включая пробелы.", 
      wrapClass: "col-12 account-item",
      num: "04",
      maxLength: 110
    },
    cards_description_full:{
      type:"textarea", 
      name: "cards_description_full",  
      label:"Подробное описание", 
      labelSecond:"Длина текста не должна превышать 3 000 символов, включая пробелы.", 
      wrapClass: "col-12 account-item",
      maxLength: 3000,
      num: "05",
    },
    cards_photos: {
      type: "dropzone", 
      name: "cards_photos", 
      label:"Загрузите фото питомника", 
      labelSecond:"Вы можете загрузить до 10 файлов. Вес каждого файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png. Рекомендуемый формат вертикальный - 2:1 (Ширина 1920px, Высота 960px).", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      num: "06",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item  img-item-input"
    },
    card_city:{
      type:"city", 
      name: "card_city",  
      placeholder: "Выберите город", 
      label:"Выберите город", 
      wrapClass: "col-12 account-item",
      num: "07"
    },
    cards_coords: { 
      type:"coords", 
      name: "cards_coords",  
      label: " Выберите адрес ",
      wrapClass: "col-12 account-item input-animate-label",
      num: "08",
    },
    card_phone:{
      type:"phone", 
      name: "card_phone",  
      label:"Телефон компании", 
      wrapClass: "col-12 account-item  input-animate-label",
      validate: ['required', 'minLength'],
      num:"09"
    },
    card_mail:{
      type:"text", 
      name: "card_mail",  
      label:"Email", 
      wrapClass: "col-12 account-item input-animate-label",
      validate: ['mailCheck'],
      num:"11"
    },
    card_site:{
      type:"text", 
      name: "card_site",  
      label:"Адрес сайта компании", 
      wrapClass: "col-12 account-item input-animate-label",
      num:"12"
    },

    social: {
      type: "multy", 
      mainname: "social", 
      label:"Социальные сети компании",  
      num: "13",
      wrapClass: "col-12 account-item",
      allFields: [
        { 
          type:"text", 
          name: "vk", 
          label: "Вконтакте", 
          wrapClass: "col-6 account-item input-animate-label",
        },
        { 
          type:"text", 
          name: "odn", 
          label: "Одноклассники", 
          wrapClass: "col-6 account-item input-animate-label",
        },
        { 
          type:"text", 
          name: "inst", 
          label: "Instagram", 
          wrapClass: "col-6 account-item input-animate-label",
        },
        { 
          type:"text", 
          name: "tw", 
          label: "Twitter", 
          wrapClass: "col-6 account-item input-animate-label",
        },
        { 
          type:"text", 
          name: "youtube", 
          label: "Youtube", 
          wrapClass: "col-6 account-item input-animate-label",
        },
        { 
          type:"text", 
          name: "rutube", 
          label: "Rutube", 
          wrapClass: "col-6 account-item input-animate-label",
        },
        { 
          type:"text", 
          name: "facebook", 
          label: "Facebook", 
          wrapClass: "col-6 account-item input-animate-label",
        },
      ],
      
    },
    certificates: {
      type: "dropzone", 
      name: "certificates", 
      label:"Загрузите сертификаты вашей организации", 
      labelSecond:"Вы можете загрузить до 10 файлов. Вес каждого файла не должен превышать 500 Кб. Допустимый формат файлов: .jpg, .png", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      hideByClickId: 'nurseries',
      num: "14",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item  img-item-input"
    },
    registerOtherCompany: {
      type:"checkbox",
      // type: "radio", 
      name: "registerOtherCompany", 
      label:"Регистрация в кинологических организациях", 
      wrapClass: "col-12 account-item account-item-checkbox",
      hideByClickId: 'nurseries',
      num: "15",
      options:[
        {label: "FCI", value:"FCI"},
        {label: "UCI", value:"UCI"},
        {label: "IKU", value:"IKU"},
        {label: "IFCS", value:"IFCS"},
        {label: "СОКО", value:"СОКО"},
        {label: "РКФ", value:"РКФ"},
        {label: "РФСС", value:"РФСС"},
        {label: "РФОС", value:"РФОС"},
        {label: "ОАНКОО", value:"ОАНКОО"},
        {label: "РКД ОД", value:"РКД ОД"},
        {label: "Добрый мир", value:"Добрый мирr"},
        {label: "РОКО", value:"РОКО"},
        {label: "Родина", value:"Родина"},
        {label: "ОО", value:"ОО"},
        {label: "СКОР", value:"СКОР"},
        {label: "ОСОО", value:"ОСОО"},
        {label: "РЛК", value:"РЛК"},
      ]
    },
    registerOtherCompanyCat: {
      type:"checkbox",
      name: "registerOtherCompanyCat", 
      label:"Регистрация в фелинологических организациях", 
      wrapClass: "col-12 account-item account-item-checkbox",
      hideByClickId: 'nurseries',
      num: "16",
      options:[
        {label: "Fife", value:"Fife"},
        {label: "WCF", value:"WCF"},
        {label: "TICA", value:"TICA"},
        {label: "PCA", value:"PCA"},
        {label: "CFA", value:"CFA"},
        {label: "ICU", value:"ICU"},
        {label: "Farus", value:"Farus"},
        {label: "МФА", value:"МФА"},
        {label: "АССОЛЮКС", value:"АССОЛЮКС"},
        {label: "ФАРСУ", value:"ФАРСУ"},
        {label: "ВОКЛК", value:"ВОКЛК"},
        {label: "СФФ", value:"СФФ"},
        {label: "АФК", value:"АФК"},
      ]
    },
    breeds_nurseries:{
      type:"breedsChoise", 
      name: "breeds_nurseries",  
      label:"Выбрать породы", 
      wrapClass: "col-12 account-item num-offset-top",
      num:"17",
      hideByClickId: 'nurseries',
      btnAddText: "Добавить породу",
      allFields: [
        { 
        },
      ],
    },
  }

}