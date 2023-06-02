
export default function(){
  return {
    order: [
      "activeCards",
      "card_name",
      "img",
      "mini_text",
      "maxi_text",
      "phone",
    ],
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
    card_name:{
      type:"text", 
      name: "card_name",  
      label:"Наименование*", 
      wrapClass: "col-12 account-item input-animate-label",
      validate: ['required', 'minLength'],
      num:"01"
    },
    img: { 
      type: "file", 
      name: "img", 
      label:"Загрузите фото услуги", 
      labelSecond:"(Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png.  )", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      textEmpty: "Загрузите фото",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item img-item-input",
      num: "02"
    },
    mini_text:{
      type:"textarea", 
      name: "mini_text",  
      label:"Краткое описание", 
      labelSecond:"Длина текста не должна превышать 110 символов, включая пробелы.", 
      wrapClass: "col-12 account-item input-animate-label",
      num: "03",
      maxLength: 110
    },
    maxi_text:{
      type:"textarea", 
      name: "maxi_text",  
      label:"Подробное описание", 
      labelSecond:"Длина текста не должна превышать 3 000 символов, включая пробелы.", 
      wrapClass: "col-12 account-item input-animate-label",
      num: "04",
      maxLength: 110
    },
    phone:{
      type:"phone", 
      name: "card_phone",  
      label:"Телефон", 
      wrapClass: "col-12 account-item  input-animate-label",
      num:"05"
    },
  }

}