

export default function(){
  return {
    order: [
      "accountName",
      "family",
      "name",
      "secondName",
      "phoneCompany",
      "email",
      "imgsAccount",
    ],
    accountName: { 
      type:"text" ,
      name: "accountName", 
      label: "Имя аккаунта  *", 
      wrapClass: "col-12 account-item input-animate-label" ,
      validate: ['required','minLength'],
      num: "01",
    },
    family: { 
      type:"text" ,
      name: "family", 
      label: "Фамилия", 
      wrapClass: "col-12 account-item input-animate-label" ,
      num: "02",
    },
    name: { 
      type:"text" ,
      name: "name", 
      label: "Имя", 
      wrapClass: "col-12 account-item input-animate-label" ,
      num: "03",
      validate: ['required','minLength'],
    },
    secondName: { 
      type:"text" ,
      name: "secondName", 
      label: "Отчество", 
      wrapClass: "col-12 account-item input-animate-label" ,
      num: "04",
    },
    email: { 
      type:"text" ,
      name: "email", 
      label: "Почта", 
      disabled: 1,
      wrapClass: "col-12 account-item input-animate-label",
      validate: ['required','minLength'],
      num: "06",
    },
    phoneCompany: {
      type:"phone" ,
      name: "phoneCompany", 
      label: "Телефон", 
      wrapClass: "col-12 account-item input-animate-label" ,
      placeholder: "Введите Отчество", 
      validate: ['required','minLength'],
      num: "05",
    },
    imgsAccount: {
      type: "photo", 
      name: "imgsAccount", 
      label:"Фото профиля", 
      labelSecond:"(Изображение формата jpg,png не менее 150x150 px, не более 8Мб)", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      textEmpty: "На данный момент фоно не выбрано",
      wrapClass: "col-12 input-photo-container account-item",
      num: "07",
    },


  }
}