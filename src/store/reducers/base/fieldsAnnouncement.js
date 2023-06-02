

export default function(){
  return {
    order: [
      "activeCards",
      "card_name",
      "age",
      "description",
      "cards_photo",
      "cards_photos",
      "caregory_animal",
      "breed",
      "userRef",
      // "cardsRef",
    ],
    card_name:{
      type:"text", 
      name: "card_name",  
      placeholder: "Наименование объявления*", 
      label:"Наименование объявления*", 
      wrapClass: "col-12 account-item",
      validate: ['required', 'minLength'],
      num:"01"
    },
    userRef:{
      type:"userRef", 
      name: "userRef",  
      placeholder: "Наименование объявления*", 
      label:"Наименование объявления*", 
      wrapClass: "col-12 account-item",
    },
    breed:{
      type:"text", 
      name: "breed",  
      placeholder: "Порода", 
      label:"Порода", 
      wrapClass: "col-12 account-item",
      validate: ['required', 'minLength'],
      num:"07"
    },
    age: { 
      type:"date",
      name: "age", 
      label: "Дата рождения", 
      wrapClass: "col-5 account-item",
      num:"02"
      
    },
    description:{
      type:"textarea", 
      name: "cards_description_mini",  
      placeholder: "Описание объявления", 
      label:"Описание объявления", 
      wrapClass: "col-12 account-item",
      num:"03"
    },
    cards_photo: {
      type: "file", 
      name: "cards_photo", 
      label:"Фото объявления", 
      labelSecond:"(Изображение формата jpg,png не менее 150x150 px, не более 8Мб)", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      textEmpty: "На данный момент фоно не выбрано",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item",
      num:"04"
    },
    cards_photos: {
      type: "dropzone", 
      name: "cards_photos", 
      label:"Фотографии объявления", 
      labelSecond:"(Изображение формата jpg,png не менее 150x150 px, не более 8Мб)", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      textEmpty: "На данный момент фоно не выбрано",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item",
      num:"05"
    },
    caregory_animal: {
      type: "list", 
      name: "caregory_animal", 
      label:"Категория породы", 
      wrapClass: "col-12 account-item",
      options:[
        {label: "Собака", value:"type_1"},
        {label: "Кошка", value:"type_2"},
      ],
      num:"06"
    },
    activeCards: {
      type:"switch",
      name: "activeCards", 
      label: "Статус", 
      options: [
        {name:"Активно",value:"on"},
        {name:"Не активно", value:"off"},
      ],
      wrapClass: "col-12 account-item",
     
    },
  }
}