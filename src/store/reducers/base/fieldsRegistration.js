
export default function(){
  return {
    order: [
      "email",
      "password",
    ],

    email: { 
      name: "email", 
      label: "Почта", 
      type:"text" , 
      validate: ['required','minLength','mailCheck'],
      wrapClass: "account-item  col-12 input-animate-label mail-input-box",
      num: "01"
    },
    password: { 
      name: "password", 
      label: "Пароль",
      type:"password", 
      validate: ['required','minLength','checkRus'],
      wrapClass: "account-item  col-12 input-animate-label pass-input-box",
      num: "02"
    },

  }
}